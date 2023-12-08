function toggleAnswer(faqId) {
    var answer = document.getElementById(faqId).getElementsByClassName('answer')[0];
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
  }
  