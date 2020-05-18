---
---
$( document ).ready(function(){
  const base_api_url = 'https://star-counter.herokuapp.com';
  var this_url = window.location.href;
  if (this_url == 'https://andytrattner.com/'){
    {% assign post = site.posts.first %}
    this_url = {{ post.url | prepend: site.baseurl }};
  }
  // check if page has star
  if ($("#star-container").length>0){

    // set correct star value
    var get_url = base_api_url + '/load?pageurl='+this_url;
    //var get_url = 'http://localhost:3000/test?queryvar=4';
    //console.log(window.location.origin);
    //console.log(window.location.pathname);

    fetch(get_url).then((response) => {
      return response.json();
    }).then((data) => {
      if (data['error'] > 0){
        console.log('error with star counter server');
        document.getElementById("star-count").innerHTML = 0;
      } else {
        try {
          document.getElementById("star-count").innerHTML = data['stars'];
          console.log('successful star count retrieved ' + data['stars'].toString() + ' for ' + data['key']);
        } catch (err) {
          document.getElementById("star-count").innerHTML = 0;
          console.log(err);
        }
      }
    });


    // set click animation
    document.getElementById("star-img-wrapper").addEventListener("mouseover", function(){
      document.getElementById("star-img").src='http://localhost:8000/star-plus.jpg';
      document.getElementById("star-count").style.color = "black";
    });
    document.getElementById("star-img-wrapper").addEventListener("mouseout", function(){
      document.getElementById("star-img").src='http://localhost:8000/star.jpg';
      document.getElementById("star-count").style.color = '#737373';
    });
    document.getElementById("star-img-wrapper").addEventListener("mousedown", function(){
      document.getElementById("star-img").src='http://localhost:8000/star-plus-inverse.jpg';
      document.getElementById("star-count").style.color = '#FFCE4E';
    });

    /* //TODO - confusing touch crap on mobile
    document.getElementById("star-img-wrapper").addEventListener("touchstart", function(event){
      document.getElementById("star-img").src='http://localhost:8000/star-plus.jpg';
      document.getElementById("star-count").style.color = "black";
    }, true);

    document.getElementById("star-img-wrapper").addEventListener("touchend", function(event){
      document.getElementById("star-img").src='http://localhost:8000/starburst-1.jpg';
      document.getElementById("star-count").style.color = '#FFB902';
      setTimeout(function(){document.getElementById("star-img").src='http://localhost:8000/starburst-2.jpg'; }, 45);
      setTimeout(function(){document.getElementById("star-img").src='http://localhost:8000/starburst-3.jpg'; }, 90);
      setTimeout(function(){
        let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        if (isMobile || WURFL.form_factor == "Tablet"){
          document.getElementById("star-img").src='http://localhost:8000/star.jpg';
          document.getElementById("star-count").style.color = "#5b5b5b";
        } else {
          document.getElementById("star-img").src='http://localhost:8000/star-plus.jpg';
          document.getElementById("star-count").style.color = "black";
        }
      }, 135);
    }, true);

    */

    document.getElementById("star-img-wrapper").addEventListener("mouseup", function(){
      document.getElementById("star-img").src='http://localhost:8000/starburst-1.jpg';
      document.getElementById("star-count").style.color = '#FFB902';
      setTimeout(function(){document.getElementById("star-img").src='http://localhost:8000/starburst-2.jpg'; }, 45);
      setTimeout(function(){document.getElementById("star-img").src='http://localhost:8000/starburst-3.jpg'; }, 90);
      setTimeout(function(){
        let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        const userAgent = navigator.userAgent.toLowerCase();
        const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
        if (isMobile || isTablet){
          document.getElementById("star-img").src='http://localhost:8000/star.jpg';
          document.getElementById("star-count").style.color = "#737373";
        } else {
          document.getElementById("star-img").src='http://localhost:8000/star-plus.jpg';
          document.getElementById("star-count").style.color = "black";
        }
      }, 135);
    });
    // set click action
    document.getElementById("star-img-wrapper").addEventListener("click", function(){
      // make API call increment
      var get_url = base_api_url +'/click?pageurl='+this_url;
      fetch(get_url).then((response) => {
        return response.json();
      }).then((data) => {
        if (data['error'] == 1){
          console.log('error with star counter server');
        } else {
          console.log('successful star increment to ' + data['stars'].toString() + ' for ' + data['key']);
        }
      });
      // make displayed counter increment
      document.getElementById("star-count").innerHTML = parseInt(document.getElementById("star-count").innerHTML) + 1;
    });


    //var get_url = 'https://www.random.org/sequences/?min=1&max=52&col=1&format=plain&rnd=new';
    /*
    var get_url = 'http://localhost:3000/test?queryvar=4'
    fetch(get_url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      console.log(data.toString());
      console.log(data.text());
    });*/

    // TODO - how to make secure??
  } else {
    console.log('no star found');
  }
});
