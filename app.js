document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const backgroundSelect = document.getElementById("background-select");
    const body = document.body;
    let bgColorPicker = document.getElementById("bg-color-picker");
    const textColorPicker = document.getElementById("text-color-picker");
    const fontSizeSlider = document.getElementById("font-size-slider");
    const fontFamilySelector = document.getElementById("font-family-selector");
    // Set initial values
    bgColorPicker.value = body.style.backgroundColor;
    textColorPicker.value = body.style.color;
    fontSizeSlider.value = parseInt(window.getComputedStyle(body).fontSize);
    fontFamilySelector.value = window.getComputedStyle(body).fontFamily;
    // Event listeners
    bgColorPicker.addEventListener("change", function() {
      body.style.backgroundColor = bgColorPicker.value;
    });
  
    textColorPicker.addEventListener("change", function() {
      body.style.color = textColorPicker.value;
    });
  
    fontSizeSlider.addEventListener("input", function() {
      body.style.fontSize = fontSizeSlider.value + "px";
    });
  
    fontFamilySelector.addEventListener("change", function() {
      body.style.fontFamily = fontFamilySelector.value;
    });
    backgroundSelect.addEventListener("change", function() {
      var selectedBackground = backgroundSelect.value;
      document.body.className = selectedBackground;
    });
  });

  function actionToggle() {
    let action = document.querySelector('.action');
    action.classList.toggle('active')
  }