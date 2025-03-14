const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendMessage = document.getElementById("sendMessage");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");


const botReplies = [
  "Salam! Necə kömək edə bilərəm? 😊",
  "Bir sualınız varsa, çəkinmədən soruşun! 🤖",
  "Bunun üçün dəstək səhifəmizi yoxlaya bilərsiniz! 🔍",
  "Zəhmət olmasa, daha ətraflı izah edin! �",

"Bu mənim üçün yeni bir mövzudur, amma öyrənə bilərəm! 📚",

"Maraqlıdır! Daha nə haqqında danışmaq istəyirsiniz? 🤔",

"Sizin üçün məlumat axtarırəm, zəhmət olmasa gözləyin... 🔍",

"Bu sual həqiqətən dərin bir sualdır! Gəlin birlikdə araşdıraq! 🌟",

"Özümü çox yaxşı hiss edirəm, bəs siz necəsiniz? 😊",

"Bir az düşündükdən sonra bu fikir ağlıma gəldi: [FƏRQLİ FİKİR] 💭",

"Əgər kömək lazımdırsa, mən həmişə hazıram! 💪",

"Hər şey yaxşıdır? Mən sizin üçün buradayam! 🤗",

"Bu məsələni anlamağa çalışıram... Bir az vaxt verin! ⏳",

"Proqramlaşdırma ilə məşğul olursunuz? Yoxsa dizayn? 🖥️🎨",

"Daha ətraflı məlumat istəsəniz, mənimlə bölüşün! 📝",

"Dostum, bu sual həqiqətən çətindir, amma mən sizin üçün buradayam! 🧩",

"Hər şey mümkündür! Sadəcə mənə deyin, həll edək! 🌈",

"Mənim alqoritmlərim sizin üçün hazırdır! 🤖",

"Bəzən sadəcə yaxşı bir söhbət kifayətdir, elə deyilmi? 🗨️",

"Mən həmişə buradayam, istənilən vaxt yaza bilərsiniz! 🕒",

"Bu məlumat sizin üçün faydalı oldu? �",

"Daha çox məlumat istəyirsinizsə, mən hazıram! 📚",

"Bu mövzunu daha yaxşı başa düşmək üçün nə etmək lazımdır? 🤔",

"Sizin üçün araşdırma aparıram, bir az gözləyin... 🔄",

"Bu əla sualdır! Gəlin birlikdə həll edək! 💡",

"Özümü super hiss edirəm! Bəs siz? 😃",

"Bir az düşündüm və bu cavab ağlıma gəldi: [MÖHTƏŞƏM CAVAB] 🎉",

"Əgər köməyə ehtiyacınız varsa, burdayam! 🛠",

"Hər şey qaydasındadırmı? Mən burdayam! 📞",

"Bunu anlamağa çalışıram... Bir saniyə! 🔄",

"Kod yazırsınız? Yoxsa dizayn edirsiniz? 🎨💻",

"Daha konkret bir şey istəsəniz, mənimlə paylaşın! 😊",

"Dostum, sualın həqiqətən çətindir, amma mən sənin üçün burdayam! 🧠🔥",

"Hər şey mümkündür! Sadəcə mənə de, həll edək! 🚀",

"Mənim alqoritmlərim sənə kömək etməyə hazırdır! 💡",

"Bəzən sadəcə yaxşı bir söhbət kifayətdir, elə deyilmi? 🗣",

"Mən 24/7 burdayam, istədiyin vaxt mesaj yaza bilərsən! ⏰",

"Bu məlumat sizin üçün faydalı oldu? 🧐",

"Daha çox məlumat istəyirsinizsə, mən hazıram! 📚",

"Bu mövzunu daha yaxşı başa düşmək üçün nə etmək lazımdır? 🤔",

"Sizin üçün araşdırma aparıram, bir az gözləyin... 🔄",

"Bu əla sualdır! Gəlin birlikdə həll edək! 💡",

"Özümü super hiss edirəm! Bəs siz? 😃",

"Bir az düşündüm və bu cavab ağlıma gəldi: [MÖHTƏŞƏM CAVAB] 🎉",

"Əgər köməyə ehtiyacınız varsa, burdayam! 🛠",

"Hər şey qaydasındadırmı? Mən burdayam! 📞",

"Bunu anlamağa çalışıram... Bir saniyə! 🔄",

"Kod yazırsınız? Yoxsa dizayn edirsiniz? 🎨💻",

"Daha konkret bir şey istəsəniz, mənimlə paylaşın! 😊",

"Dostum, sualın həqiqətən çətindir, amma mən sənin üçün burdayam! 🧠🔥",

"Hər şey mümkündür! Sadəcə mənə de, həll edək! �",

"Mənim alqoritmlərim sənə kömək etməyə hazırdır! 💡",

"Bəzən sadəcə yaxşı bir söhbət kifayətdir, elə deyilmi? 🗣",
];

chatButton.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

sendMessage.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");
    chatInput.value = "";
    setTimeout(() => {
      const botMessage = botReplies[Math.floor(Math.random() * botReplies.length)];
      addMessage(botMessage, "bot");
    }, 1000);
  }
});


function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("p-2", "rounded-lg", "my-1", "max-w-[75%]");
  if (sender === "user") {
    messageDiv.classList.add("bg-[#a271f2]", "text-white", "self-end", "ml-auto");
  } else {
    messageDiv.classList.add("bg-gray-300", "text-black", "self-start", "mr-auto");
  }
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}