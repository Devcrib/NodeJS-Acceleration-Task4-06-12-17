
function getData(){
return data;
}

function createNode(element) {
  // Create the type of element you pass in the parameters
  return document.createElement(element);
}

function append(parent, element) {
  // Append the second parameter(element) to the first one
  return parent.appendChild(element);
}

function renderAll(){
  
  let htmlText = ``;
  let data = getData();
     data.map((eachData) => {

      htmlText += `<div class="profile-card col col-sm-6 col-md-3">
      <div class="wrapper">
        <div class="img"> <img src="${eachData.picture}" alt="${eachData.name}" srcset=""></div>
        <div class="name">${eachData.name}</div>
        <div class="username">@ <span>${eachData.email}</span></div>

        <div class="cta"><a href="#show" onclick="forProfile('${eachData._id}')" class="btn btn-primary showProfile"><i class="fa fa-eye"></i> View Profile</a></div>
      </div>
    </div>`;
      return;
     });

     $('.search-results .results .row').html(htmlText);
   }




function forProfile(id){
  let htmlText = ``;
  let data = getData();

    for(let i=0; i<data.length; i++){
      if(id == data[i]._id){
        let userData = data[i];
        let ranNum1 = Math.ceil(Math.random()*499);
        let ranNum2 = Math.floor(Math.random()*499);
        let ranNum3 = Math.ceil(Math.random()*499);

       htmlText += `
       <div class="col col-xs-12 col-sm-6 col-md-4 avatar">
         <div class="wrapper">
           <div class="img"><img src="${userData.picture}" alt="" srcset=""></div>
           <div class="name">${userData.name}</div>
           <div class="badge  badge-primary">${userData.gender}</div>
           <div class="data">${userData.email}</div>
           <div class="data">${userData.phone}</div>
           <div class="data">${userData.address}</div>
           <div class="data"><span class='spec'>Company: </span>${userData.address}</div>
           <div class="data"><span class='spec'>Favourite Fruit: </span>${userData.favoriteFruit}</div>
           <div class="data"><span class='spec'>Eye Color: </span>${userData.eyeColor}</div>
           <div class="status"><a class='btn btn-primary'>Add as Friend</a></div>
         </div>
       </div>

       <div class="col col-xs-12 col-sm-6 col-md-3 about">
           <div class="wrapper">
             <div class="title">
               About <i class="fa fa-arrow-circle-o-right"></i>
             </div>
             <div>
               ${userData.about}
             </div>
           </div>
       </div>

       <div class="col col-xs-12 col-sm-6 col-md-5 friends">
           <div class="title">
              Friends <i class="fa fa-arrow-circle-o-right"></i>
            </div>
            <div class="">
              <div class="row">
                <div class="col col-6">
                  <img src="${data[ranNum1].picture}" alt="">
                  <div class="name">${userData.friends[0].name}</div>
                </div>
                <div class="col col-6">
                    <img src="${data[ranNum2].picture}" alt="">
                    <div class="name">${userData.friends[1].name}</div>
                </div>
                <div class="col col-6">
                    <img src="${data[ranNum3].picture}" alt="">
                    <div class="name">${userData.friends[2].name}</div>
                </div>
                <div class="col col-6 view-more">
                    <a href="#" class='btn btn-primary'>View more <i class="fa fa-arrow-circle-o-right"></i></a>
                </div>
              </div>
            </div>
       </div>
      
     `;

       $('.profile .container .row').html(htmlText);
      showProfile();
      }
    }

}

function showSearchResult(){
  $('section.profile').addClass('hidden');
  $('section.search-results').removeClass('hidden');
}

function showProfile(){
  $('section.search-results').addClass('hidden');
  $('section.profile').removeClass('hidden');
}
