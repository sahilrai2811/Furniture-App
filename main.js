let fullPageData;
let responseData;

function onloadf() {
  let value = '';
  fetch("http://localhost:3000/furniture").then(response => { return response.json() })
    .then(data => {
      console.log(data);
      responseData = data;
      data.forEach(element => {
        value += ` <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.path}" alt="Card image cap">
                        <div class="card-body">
                            <div class="name">${element.name}</div><br>
                            <div class="category">${element.category} <span class="price">$${element.price} </span></div><br>
                            <div class="category">${element.rating} <i class="tiny material-icons">star_border</i></span> <a class="price" href="#" onclick="showDetails(${element.id})"><i class="small material-icons navbarIcon">add_shopping_cart</i></a></div>
                        </div>
                      </div>
                </div>`
      });
      document.getElementById('tiles-col').innerHTML = value
    }).catch(error => {
      console.log("inerror block");
      if (error) {
        console.log(error);
        document.getElementById('tiles-col').innerHTML = `<h2>Error: Page not found</h2>`
      }
    });

}


function showDetails(item) {
  console.log("showDetails called");
  let pageData = document.getElementById('fullPage').innerHTML;
  fullPageData = pageData;
  let value = '';
  responseData.forEach(element => {
    if (element.id == item) {
      value = `       <div class="col-md-6">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src=${element.path} alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src=${element.path} alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src=${element.path} alt="Third slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </div>
        <div class="col-md-6">
            <div class="nameSpec">${element.name}</div>
            <div class="categorySpec">${element.category}</div>
            <div class="detailsSpec">${element.details}</div>

        <div class="row mt-5">
            <div class="col-md-5">
                <span class="gerySm"> Price per unit</span>  <br>
                 <span class="largeTxt">$ ${element.price}</span>
             </div>
             <div class="col-md-5 mt-3">
                 <button  type="button" class="btn btn-dark" onclick="alertBox()">Buy Now</button>
             </div>
             <div class="col-md-2 mt-4">
                <a href="#" onclick="alertBox()"><i class="large material-icons">add_shopping_cart</i></a> 
             </div>
        </div>

        </div>`
    }
  })
  document.getElementById('fullPage').innerHTML = value;
}

function homePage() {
  document.getElementById('fullPage').innerHTML = fullPageData;
}

function alertBox() {
  alert("Page is under development");
}