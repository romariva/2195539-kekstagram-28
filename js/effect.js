//массив всех эффектов из ТЗ
const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min:0,
    max:100,
    step:1,
    unit:'',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min:0,
    max:1,
    step:0.1,
    unit:'',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min:0,
    max:1,
    step:0.1,
    unit:'',
  },
  {
    name: 'marvin',
    style: 'invert',
    min:0,
    max:100,
    step:1,
    unit:'%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min:0,
    max:3,
    step:0.1,
    unit:'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min:1,
    max:3,
    step:0.1,
    unit:'',
  },
];

//первый эффект из массива, дефолтный
const DEFAULT_EFFECT = EFFECTS[0];

//здесь храниться выбранный эффект, дефолтный по уполчанию
let chosenEffect = DEFAULT_EFFECT;

const imgPreviewElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelElement = document.querySelector('.effect-level__value');

//проверка выбран ли дефолтный эффект
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

//показать слайдер
const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

//спрятать слайдер
const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

//обновляет свойства NoUiSlider
const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  //если выбран дефолтный, слайдлер нужно скрыть
  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();//получаем значения слайдера
  imgPreviewElement.style.filter = isDefault()//проверяем выбран ли дефолт эффект
    ? DEFAULT_EFFECT.style//если да то записываем дефолтный стиль 'none'
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;//формируем строку из наприм. style: 'invert' + значения из слайдера + единицы измерения.
  effectLevelElement.value = sliderValue;//и записываем значения слайдера в скрытое поле
};

//обработчик кликов по фильтрам с эффектами
const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);//сопоставляем value эффекта с выбранным
  imgPreviewElement.className = `effects__preview--${chosenEffect.name}`;//меняем класс фотографии
  updateSlider();
};

//сброс эффектов поумолч
const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

//создаем слайдер
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);//через метод on обращаемся к NoUISlider

export {resetEffects};
