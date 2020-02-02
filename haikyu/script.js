window.onload = function(){
    $("<ul>",{
        'id':'avatar',
        'class': 'grid',
    }).appendTo('.player');
    $("<img src='images/hinata.jpeg' alt = 'hinata'/>").appendTo("#avatar");
    $("<img src='images/kageyama.jpeg' alt = 'kageyama'/>").appendTo("#avatar");

};

        // $(window).load(function(){

        // $("<div/>", {
        //   "id": "image",
        //   "css": { "display" : "block"},
        // }).appendTo("body");

        // $("<img src='_ls-global/layout-images/layout.png'/>").appendTo("#image");
        // $("<img src='_ls-global/layout-images/layout2.png'/>").appendTo("#image");

        // });