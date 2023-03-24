let image = document.querySelectorAll("img");
for(let i = 0 ; i < image.length; i ++)
{
    image[i].src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    image[i].alt ="Elzero Logo";
}
document.body.append(image);