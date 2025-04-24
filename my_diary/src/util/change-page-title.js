const changeTitle = (text) => {
  const $title = document.getElementsByTagName('title')[0];
  $title.innerText = text;
};

export default changeTitle;
