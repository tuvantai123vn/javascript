'use strict';

'use strict'
if(currentUser){
    const navPageNum = document.getElementById('nav-page-num');
    const inputQuery = document.getElementById('input-query');
    const btnSubmit = document.getElementById('btn-submit');

    const newsContainer = document.getElementById('news-container');
    const btnPrev = document.getElementById('btn-prev');
    const pageNum = document.getElementById('page-num');
    const btnNext = document.getElementById('btn-next');
    let keywords = '';
    let totalResults = 0;

    navPageNum.style.display = 'none';
    // bắt sự kiện khi bấm vào nút submit
    btnSubmit.addEventListener('click', function(){
        pageNum.textContent = '1';
        newsContainer.innerHTML ='';
        if(inputQuery.value === ''){
            navPageNum.style.display = 'none';
            alert('Vui lòng nhập keywords');
        }else{
            keywords = inputQuery.value;
            getDatanewskeywords(keywords, 1);
            console.log(keywords);
        }
    })
    console.log(keywords);
    // lấy dữ liệu Data news thông qua API
    async function getDatanewskeywords(keywords, page){
        try{
            // kết nối và lấy dữ liệu API
            const res = await fetch(`https://newsapi.org/v2/everything?q=${keywords}&sortBy=relevancy&pageSize=${currentUser.pageSize}&page=${page}&apiKey=8b41ada840524216b0d768c1f61398b6`);
            const data = await res.json();
            console.log(data);
            if(data.totalResults == 0){
                navPageNum.style.display ='none';
                throw new Error
                ('Không có bài báo phù hợp với tìm kiếm của bạn');
            }
            navPageNum.style.display = 'block';
            displayNewList(data);

            
        }catch(err){
            alert(err.message);
        }
    }
    // kiểm tra nếu textcontent = 1 thì ẩn btnPrev
    function checkBtnPrev(){
        if(pageNum.textContent == 1){
            btnPrev.style.display = 'none';
        }else{
            btnPrev.style.display = 'block';
        }
    }
    // kiểm tra nếu textcontent bằng số lượng bài viết chia cho pageSize thì ẩn btnNext
    function checkBtnNext(){
        if(pageNum.textContent == Math.ceil(totalResults / currentUser.pageSize)){
        btnNext.style.display = 'none';
        }else{
            btnNext.style.display = 'block';
        }
    }
    // khi người dùng nhấn vào nút btnPrev thì lùi lại 1 trang
    btnPrev.addEventListener('click', function(){
        getDatanewskeywords(keywords, --pageNum.textContent);
    })
    // khi người dùng nhấn vào nút btnNext thì tăng lên 1 trang
    btnNext.addEventListener('click', function(){
        getDatanewskeywords(keywords, ++pageNum.textContent);
    })
  

    // hàm này dùng để render các bài viết ra màn hình 
    function displayNewList(data){
        totalResults = data.totalResults;
        checkBtnPrev();
        checkBtnNext();
        let html = '';
        data.articles.forEach(function(articles){
            html +=`
            <div id="news-container">
                    <div class="card flex-row flex-wrap">
                        <div class="card mb-3" style="">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src=${articles.urlToImage}
                                        class="card-img">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${articles.title}</h5>
                                        <p class="card-text">${articles.description}</p>
                                        <a href=${articles.url}
                                            class="btn btn-primary">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        });
        newsContainer.innerHTML = html;
    }
}else{
    alert('Vui lòng đăng nhập hoặc đăng ký nếu chưa có tài khoản');
    window.location.href = '../index.html';
}