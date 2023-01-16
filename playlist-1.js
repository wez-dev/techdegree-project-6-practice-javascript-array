const playlist = [
    'So What',
    'Respect',
    'What a Wonderful World',
    'At Last',
    'Three Little Birds',
    'The Way You Look Tonight'
  ];
  
  function createListItem(arrgumentA) {
    let item = '';
    
    for(let i = 0; i < arrgumentA.length; i++) {
      item += `<li>${arrgumentA[i]}</li>`;
    }
    return item;
  }
  
  document.querySelector('main').innerHTML = `
  <ol>
    ${createListItem(playlist)}
  </ol>
  `;