const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(function (tabBtn) {
  const tabBtnId = tabBtn.dataset.id;
  //   console.log(tabBtnId);

  tabBtn.addEventListener('click', function () {
    tabBtns.forEach(function (tabBtn2) {
      const tabBtnId2 = tabBtn2.dataset.id;
      const articles = document.getElementById(tabBtnId2);

      if (tabBtnId2 !== tabBtnId) {
        tabBtn2.classList.remove('active');
        articles.classList.remove('active');
      } else {
        tabBtn2.classList.add('active');
        articles.classList.add('active');
      }
    });
    // console.log(articles);
  });
});

// Alternative Method
// const about = document.querySelector('.about');
// const tabBtns = document.querySelectorAll('.tab-btn');
// const articles = document.querySelectorAll('.content');

// about.addEventListener('click', function (e) {
//   //   console.log(e.target);
//   const clickedElementId = e.target.dataset.id;
//   if (clickedElementId) {
//     tabBtns.forEach(function (tabBtn) {
//       tabBtn.classList.remove('active');
//     });
//     e.target.classList.add('active');

//     // hide other articles
//     articles.forEach(function (eachArticle) {
//       eachArticle.classList.remove('active');
//     });
//     const clickedElement = document.getElementById(clickedElementId);
//     clickedElement.classList.add('active');
//   }
// });
