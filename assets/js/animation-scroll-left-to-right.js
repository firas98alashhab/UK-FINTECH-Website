const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show2');
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden2');
hiddenElementsLeft.forEach((el) => observer.observe(el));
