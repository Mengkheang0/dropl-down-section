var selection = document.getElementById('top');
var imgs = selection.getElementsByTagName('img');
var preview_img = document.getElementById('preview-img');
var preview_div = document.getElementById('preview-div');
var title_container = document.getElementsByClassName('title');



var close = document.getElementsByClassName('close');

//default when load up
preview_img.src = imgs[0].src;


close[0].addEventListener('click',(e)=>{

    preview_div.style.display = "none";
});


for(let x =0;x<imgs.length;x++)
{
    imgs[x].addEventListener('click',function(){

        if(preview_div.style.display == "none")
        {
            preview_div.style.display = "flex";
        }
        
        preview_img.src = imgs[x].src;

        //change title
        var title  = title_container[0].getElementsByTagName('p');
        title[0].textContent = imgs[x].alt;
    });
}