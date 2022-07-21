// 검색창 컴포넌트 UI
$(function(){
  const html = `
  <!-- 검색 UI -->
  <div class="search-box">
    <form class="search-box-container">
      <input 
        type="search" 
        id="search"
        placeholder="검색"
        required  
      >
      <div class="button-group">
        <button id="submit" type="submit"><i class="bi bi-search"></i></button>
        <button class="btn-close"><i class="bi bi-x-lg"></i></button>
      </div>
    </form>
  </div>`;
  $('body').append(html);
}); // $

$(function(){
  /* #gnb toggle
      1. 열기: #toggle-btn 클릭시 #gnb on
      2. 닫기: #btn-close 클릭시 #gnb
  */
  $('#toggle-btn').click(function(){
      $('#gnb').addClass('on');
     
  });

  $('#btn-close').click(function(){
      $('#gnb').removeClass('on');
  });

  /*** 검색창 열고 닫기 */
  // 1. #icon-menu .bi-search 누르면 열기
  $('#icon-menu .bi-search').click(function(){
      $('.search-box').addClass('on');
     
  });
  // 2. .search-box .btn-close 누르면 닫기
  $('.search-box .btn-close').click(function(){
      $('.search-box').removeClass('on');
  });    

}); // $