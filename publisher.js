const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
    console.log(error);
});

client.publish("ealper", "app üzerinden gönderilen", (e, number) => {
    console.log(`Mesaj ${number} kişiye gönderildi...`);
});