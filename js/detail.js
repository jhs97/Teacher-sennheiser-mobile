// 제품 데이터 가져오기
function getData(){
    // const DataURL = '여러분들의 github주소' 여기에 여러분 깃허브 json 파일 경로(서버데이터 주소)
    const DataURL = 'https://raw.githubusercontent.com/csslick/sennheiser-mobile/main/data.json'
    fetch(DataURL)
    .then(function(res){
      return res.json(); // JSON 객체 변환
    })
    .then(function(obj){
      // obj 데이터
      showDetail(obj);
      console.log(obj);
    });
    
  };
  
  
  function showDetail(obj) {
    // 현재 페이지의 URL query 파라미터(매개변수)
    const query = location.search;
    console.log(query);
    // ? URL query문을 object(변수)로 변경
    let params = new URLSearchParams(query).get('id');
    console.log(params);   
  
    
        //  해당 id 제품 출력
        let category = obj[params].category;
        let name = obj[params].name;
        let price = obj[params].price;
        let imgUrl = obj[params].imgUrl;
        let text = obj[params].text;
        console.log('name =', name)

        // detail.html에 각 변수값 주입
        $('#detail main header h1').text(name);
        $('#detail main header .price span').text(price);
        $('#detail main figure img').attr("src",imgUrl);
        $('#detail main .container .text').text(text);

    };
  
  $(function(){
    getData();
  });