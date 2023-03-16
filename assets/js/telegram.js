$(document).ready(function () {
    $('#btn-submit-order').click(function () {


        console.log("clicked");
        let apiToken = "5435733281:AAGIQWMpePWTkh_5LAtoeanxhlkO4B9XyQ4";
        let chatId = "@pharmcytony"; // able to send to public channel ONLY, private channel will not works.
        // let chatId = "508976051"; //use @get_id_bot to get chatID
        let text = "Hello world!";

        let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

        let request = new XMLHttpRequest();
        request.open("GET", urlString);
        request.send();

        let response = request.response;

// Do what you want with response
        console.log(response);
    });


});