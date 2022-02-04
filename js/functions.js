window.onload = function(){
  const elements = ['java','agile','bd','events','devops','front','arquitecture','git','outros','node','python','soft'];

  elements.forEach((item, i) => {
    document.getElementById(item).style.display = 'none';
    document.getElementById(item+'-visibility').style.display = 'none';
  });


};

function hideElement(elementName) {
  var element = document.getElementById(elementName);

  if (element.style.display === "none") {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function takeVisibility(showName, hideName) {

  var showElement = document.getElementById(showName);
  var hideElement = document.getElementById(hideName);

  if (showElement.style.display === "none") {
    hideElement.style.display = 'none';
    showElement.style.display = 'block';
  } else {
    hideElement.style.display = 'block';
    showElement.style.display = 'none';
  }
}
