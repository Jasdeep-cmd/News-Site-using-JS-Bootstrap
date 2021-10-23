let newsApi=document.getElementById('newsAPI');

let source='the-times-of-india';
let apiKey='c587123015564aa5902ef1854df22a86';

const xhr=new XMLHttpRequest();      

//ajax get request
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

// xhr.getAllResponseHeaders('Content-type','application/json');

xhr.onload=function(){
    if(this.status === 200){
        let json=JSON.parse(this.responseText);
        console.log(json);
        let articles=json.articles;
        newsHtml="";
        articles.forEach(function(element,index) {
                 let news=`<div class="card">
                        <div class="card-header" id="heading${index}">
                          <h2 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse${index}"
                              aria-expanded="true"
                              aria-controls="collapse${index}"
                            >
                              <b>Breaking new ${index+1}: </b>${element["title"]}
                            </button>
                          </h2>
                        </div>
              
                        <div
                          id="collapse${index}"
                          class="collapse"
                          aria-labelledby="heading${index}"
                          data-parent="#newsAPI"
                        >
                          <div class="card-body">
                            ${element["description"]} <a href="${element["url"]}" target="_blank" >Read more here</a>
                          </div>
                        </div>
                      </div>`
                    newsHtml+=news;
        });
        newsApi.innerHTML=newsHtml;
    }
    else{
        console.log('Some error occured');
    }
}

xhr.send();

