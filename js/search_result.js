function ml_sort(){
    const sort_list = [productList[0].code];
    for(let i=1; i<productList.length; i++){
        var check = true
        for(let x=0; x<sort_list.length; x++){
            for(let y=0; y<productList.length; y++){
                if(sort_list[x] == productList[y].code){ // 리스트에 있는 code에 해당하는 ml_price 추출
                    var list_price = productList[y].ml_price;  
                };
            
            };
            if(productList[i].ml_price <= list_price){
                sort_list.splice(x, 0, productList[i].code);
                var check = false;
                break;
            };
            
        };
        if(check == true){
            sort_list.push(productList[i].code);
            
        };
            
    }; return sort_list;
};

function making_ml_sort(){
    var sort_list = ml_sort();

    for(a=0; a<sort_list.length; a++){

        for(b=0; b<productList.length; b++){
            if(sort_list[a] == productList[b].code){
                break;
            }
        };

        contents_list = document.querySelector("#contents_list");
        var listup = document.createElement('div');
        contents_list.append(listup);
        
        listup.classList.add('contents_list_detail');

        var putimg = document.createElement('img');
        var listimg = '../img/product_img/' + productList[b].code + '.jpg';
        putimg.src = listimg;
        putimg.classList.add('listimg');

        var textbox = document.createElement('div');
        textbox.classList.add('textbox');
        listup.append(putimg, textbox);

        if (productList[b].capacity >= 1000){
            capacity_tr = (productList[b].capacity / 1000) + 'L'
        } else {
            capacity_tr = productList[b].capacity + 'ml'
        };

        var subject = productList[b].subject + ', ' + capacity_tr + ' ' + productList[b].count + '개'
        var price =  productList[b].price + '원';
        var capacity_info = '(100ml 당 ' + Math.ceil(productList[b].price/productList[b].capacity/productList[b].count*100) + '원)';
        var score = productList[b].score + ' (' + productList[b].score_count + ')';

        const names = [];
        names.splice(0, 1, subject );
        names.splice(1, 1, price);
        names.splice(2, 1, capacity_info);
        names.splice(3, 1, score);

        textbox.innerHTML += '<p>' + names[0] + '</p>';
        textbox.innerHTML += '<p>' + names[1] + '</p>';
        textbox.innerHTML += '<p>' + names[2] + '</p>';
        textbox.innerHTML += '<p>' + names[3] + '</p>';
    };
    
};

function papular_sort(){
    const sort_list = [productList[0].score];
    for(let i=1; i<productList.length; i++){
        var check = true
        for(let x=0; x<sort_list.length; x++){
            for(let y=0; y<productList.length; y++){
                if(sort_list[x] == productList[y].code){ // 리스트에 있는 code에 해당하는 ml_price 추출
                    var list_price = productList[y].score;  
                };
            
            };
            if(productList[i].score >= list_price){
                sort_list.splice(x, 0, productList[i].code);
                var check = false;
                break;
            };
            
        };
        if(check == true){
            sort_list.push(productList[i].code);
            
        };
            
    }; return sort_list;
};

function making_papular_sort(){
    var sort_list = papular_sort();

    for(a=0; a<sort_list.length; a++){

        for(b=0; b<productList.length; b++){
            if(sort_list[a] == productList[b].code){
                break;
            }
        };

        contents_list = document.querySelector("#contents_list");
        var listup = document.createElement('div');
        contents_list.append(listup);
        
        listup.classList.add('contents_list_detail');

        var putimg = document.createElement('img');
        var listimg = '../img/product_img/' + productList[b].code + '.jpg';
        putimg.src = listimg;
        putimg.classList.add('listimg');

        var textbox = document.createElement('div');
        textbox.classList.add('textbox');
        listup.append(putimg, textbox);

        if (productList[b].capacity >= 1000){
            capacity_tr = (productList[b].capacity / 1000) + 'L'
        } else {
            capacity_tr = productList[b].capacity + 'ml'
        };

        var subject = productList[b].subject + ', ' + capacity_tr + ' ' + productList[b].count + '개'
        var price =  productList[b].price + '원';
        var capacity_info = '(100ml 당 ' + Math.ceil(productList[b].price/productList[b].capacity/productList[b].count*100) + '원)';
        var score = productList[b].score + ' (' + productList[b].score_count + ')';

        const names = [];
        names.splice(0, 1, subject );
        names.splice(1, 1, price);
        names.splice(2, 1, capacity_info);
        names.splice(3, 1, score);

        textbox.innerHTML += '<p>' + names[0] + '</p>';
        textbox.innerHTML += '<p>' + names[1] + '</p>';
        textbox.innerHTML += '<p>' + names[2] + '</p>';
        textbox.innerHTML += '<p>' + names[3] + '</p>';
    };
    
};

// var listup = document.querySelector(".contents_list_detail");

// var putimg = document.createElement('img');
// var listimg = '../img/product_img/' + productList[0].code + '.jpg';
// putimg.src = listimg;
// putimg.classList.add('listimg');

// var textbox = document.createElement('div');
// textbox.classList.add('textbox');
// listup.append(putimg, textbox);

// if (productList[0].capacity >= 1000){
//     capacity_tr = (productList[0].capacity / 1000) + 'L'
// } else {
//     capacity_tr = capacity + 'ml'
// };

// var subject = productList[0].subject + ', ' + capacity_tr + ' ' + productList[0].count + '개'
// var price =  productList[0].price + '원';
// var capacity_info = '(100ml 당 ' + Math.ceil(productList[0].price/productList[0].capacity/productList[0].count*100) + '원)';
// var score = productList[0].score + ' (' + productList[0].score_count + ')';

// const names = [];
// names.splice(0, 1, subject );
// names.splice(1, 1, price);
// names.splice(2, 1, capacity_info);
// names.splice(3, 1, score);

// textbox.innerHTML += '<p>' + names[0] + '</p>';
// textbox.innerHTML += '<p>' + names[1] + '</p>';
// textbox.innerHTML += '<p>' + names[2] + '</p>';
// textbox.innerHTML += '<p>' + names[3] + '</p>';

// var list_text = document.createElement('p');

// listup.append(list_text);
// listup.append(list_text);


// for(let i=0; i<4; i++){
//     listup.append(list_text);
//     list_text.textContent = names[i];
// };

// jQuery(function($){
// 	for(var i=0; i<4; i++){
// 		$(listup).append(list_text);
// 	}
// })

// listup.appendChild(list_text);

// for(let i in Range(4)) {
//     var list_text = createElement('p');
//     list_text.innerHTML = names[i];
// }



// list_text.innerHTML += score + '<br/>' ;
// list_text.innerHTML += price + '<br/>' ;
// list_text.innerHTML += capacity_info + '<br/>' ;
// list_text.innerHTML += score + '<br/>' ;



// list_text.innerHTML += price;
// list_text.innerHTML += capacity_info;
// list_text.innerHTML += score;


