const menue = document.getElementById('menue');

const burgerList = [
  {
    name: 'Classic Burger',
    text: '180 gr. burgare, majonnäs, sallad, tomat, rödlök',
    price: '102kr',
    id: '01'
  },
  {
    name: 'Cheese Burger',
    text: '180 gr. burgare, dijonmajonnäs, picklad gurka, stekt lök, cheddarost',
    price: '102kr',
    id: '02'
  },
  {
    name: 'Bacon & Cheese Burger',
    text: '180 gr. burgare, majonnäs, sallad, tomat, bacon, cheddarost',
    price: '102kr',
    id: '03'
  },
  {
    name: 'BBQ Burger',
    text: '180 gr. burgare, majonnäs, picklad gurka, rostad lök, bbqsås, bacon, cheddarost',
    price: '102kr',
    id: '04'
  },
  {
    name: 'Burger Love',
    text: '180 gr. burgare, chilimajonnäs, sallad, tomat, stekt lök, bacon, cheddarost',
    price: '106kr',
    id: '04'
  }
]

const menueList = [
  {
    title: 'Burgers',
    items: burgerList
  },
  {
    title: 'Salads',
    items: []
  },
  {
    title: 'Shakes',
    items: []
  },
  {
    title: 'Drinks',
    items: []
  },
]

const generateMenu = () => {
  
  menueList.forEach((foodCategory) => {
    menue.innerHTML += `
    <section class="menue d-flex-col justify-content-center">
    <div class="accordion-header d-flex">
        <div class="m-3 d-flex-col"> 
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <h1 class="food-title">${foodCategory.title}</h1>
        <div class="m-3 d-flex-col"> 
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
      <div class ="accordion-content">
        <ul style="list-style-type: none;" >
          ${foodCategory.items.map((item) => `
          <li>
            <div class="d-flex justify-content-between">
              <div>
                <h2>${item.name}</h2> 
                <p class="item-text mr-5">${item.text}</p>
              </div>
              <div class="d-flex ml-5">
                <h2>${item.price}</h2> 
              </div>
            </div>
          </li>
        `)}
        </ul>
      </div>
      </section>
    `;
  });
  
};
generateMenu()

  function toggle() {
      this.classList.toggle('open')
  }
  const accordionContent = document.querySelectorAll(".accordion-header");
  accordionContent.forEach(item =>{
      item.onclick = toggle
  })

