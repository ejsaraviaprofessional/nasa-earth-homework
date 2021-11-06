const INPUT_COORDINATES_ID = 'input-map-coordinates';
const BTN_SUBMIT_ID = 'btn-submit';
const IMG_MAP_ID = 'img-map';
const SPINNER_IMG_LOAD = 'img-loader-spinner';

const PATTERN_VALIDATION_MAPS_COORDINATES = /^[-]?\d+[\.]?\d*\/[-]?\d+[\.]?\d*$/;
const API_URI_MAPS_IMAGES = `/api/maps/images`;

const throwError = ({ error, description, userMessage = `Invalid value, please try again` }) => {
  throw { error, description, userMessage };
};

/**
 * Get / validate coordinates
 * @param {DOM} input
 */
const getCoordinatesFromElementInputDOM = (input) => {
  const inputValue = input.value;
  const isInvalidValue = !PATTERN_VALIDATION_MAPS_COORDINATES.test(inputValue);

  if (isInvalidValue) {
    throwError({
      error: `INVALID_VALUE`,
      description: `data not match`,
    });
  }

  const [latitude, longitude] = inputValue.split('/');
  return { latitude, longitude };
};

const getMapImageUrl = async (coordinates) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(coordinates),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(options);
    const response = await fetch(API_URI_MAPS_IMAGES, options);
    const data = await response.json();
    console.log(data)
    return data.urlImage;
  } catch (error) {
    throwError({
      error: `API_CALL_ERROR`,
      description: `api call returned error`,
    });
  }
};

const setMapImage = (imageUrl) => {
  const imageElement = document.getElementById(IMG_MAP_ID);
  imageElement.src = imageUrl;
};

const showSpinner = (show) => {
  const spinner = document.getElementById(SPINNER_IMG_LOAD);
  if (show) {
    spinner.classList.remove('visually-hidden');
  } else {
    spinner.classList.add('visually-hidden');
  }
}

const showErrorMessage = (errorMessage) => {
  alert(errorMessage);
};

const onBtnSubmitClicked = async () => {
  try {
    showSpinner(true);
    const inputCoordinates = document.getElementById(INPUT_COORDINATES_ID);
    const coordinates = getCoordinatesFromElementInputDOM(inputCoordinates);
    const imageUrl = await getMapImageUrl(coordinates);
    setMapImage(imageUrl);
    showSpinner(false);
  } catch (error) {
    console.log(error);
    showErrorMessage(error.description);
  }
};

(async () => {
  const btnSubmit = document.getElementById(BTN_SUBMIT_ID);
  btnSubmit.onclick = onBtnSubmitClicked;
})();
