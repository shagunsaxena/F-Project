const container = document.querySelector(".container");
const chatContainer = document.querySelector(".chat-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");
const fileInput = promptForm.querySelector("#file-input");
const fileUploadWrapper = promptForm.querySelector(".file-upload-wrapper");
const themeToggle = document.querySelector("#theme-toggle-btn");



const API_KEY = "AQ.Ab8RN6ImlkUMNTXroRwM9fVLGO8Va90c1Sc2CYlYDRLPFAV5yw";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API_KEY}`;


let typingInterval, controller;
const userData = { message: "", file: {} };
const chatHistory = [];

//function to create msg element
const createMsgElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

const scrollToBottom = () => container.scrollTo({top: container.scrollHeight, behavior: "smooth"})

const typingEffect = (text, textElement, botMsgDiv) => {
    textElement.textContent = "";
    const words = text.split(" ");
    let wordIndex = 0;

    const typingInterval = setInterval(() => {
        if(wordIndex < words.length){
            textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
            botMsgDiv.classList.remove("loading");
            scrollToBottom();
        } else {
            clearInterval(typingInterval);
            botMsgDiv.classList.remove("loading");
            document.body.classList.remove("bot-responding");
        }
    },40);
}        


const generateResponse = async (botMsgDiv) =>{
    const textElement = botMsgDiv.querySelector(".message-text");
    controller = new AbortController();

chatHistory.push({
    role: "user",
    parts: [
        ...(userData.file.data
            ? [{
                inline_data: {
                    mime_type: userData.file.mime_type,
                    data: userData.file.data
                }
            }]
            : []),

        {
            text: userData.message
        }
    ]
});

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: chatHistory }),
            signal: controller.signal
        });

        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);

        const responseText = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
        typingEffect(responseText, textElement, botMsgDiv);
        
        chatHistory.push({role: "model", parts: [{ text: responseText }]
    });
    //    console.log(chatHistory); 
        
    } catch (error) {
        console.log(error);
    } finally {
        userData.file = {};
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = promptInput.value.trim();
    if(!userMessage ||  document.body.classList.contains("bot-responding")) return;

    promptInput.value = "";
    userData.message = userMessage;
    document.body.classList.add("bot-responding", "chats-active");
    fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");


   //Generate user message HTML and add in the chat container 
            const userMsgHTML = `<p class="message-text"></p>
            ${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="img-attachment" />` : `<p class="file-attachement"><span 
            class="material-symbol-rounded">description</span>${userData.file.fileName}</p>`) : ""} `;

            const userMsgDiv = createMsgElement(userMsgHTML, "user-message");
            userMsgDiv.querySelector(".message-text").textContent = userMessage;
            chatContainer.appendChild(userMsgDiv); 
            scrollToBottom();

    setTimeout(() =>{
         //Generate user message HTML and add in the chat container 
            const botMsgHTML = ` <img src="assets/gemini.svg" class="avatar"><p class="message-text">Just a sec..</p>`
            const botMsgDiv = createMsgElement(botMsgHTML,"bot-message", "loading");
            chatContainer.appendChild(botMsgDiv);
            scrollToBottom();
            generateResponse(botMsgDiv); 
            
        }, 600)
} 
// handle file input change(upload file)

fileInput.addEventListener("change", ()=> {
    const file = fileInput.files[0];
    if(!file) return;

    const isImage = file.type.startsWith("image/");
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
        
        fileInput.value = "";
        const base64String = e.target.result.replace(/^data:.*;base64,/, "");
        fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
        fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached");
        
        userData.file = { fileName: file.name, data:base64String, mime_type: file.type, isImage };

    }
    //cancel file upload
    document.querySelector("#cancel-file-btn").addEventListener("click", () => {
        userData.file = {};
        fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");
    });
    //stop response
    document.querySelector("#stop-response-btn").addEventListener("click", () => {
        userData.file = {};
        controller?.abort();
        clearInterval(typingInterval);
        chatContainer.querySelector(".bot-message.loading").classList.remove("loading");
        document.body.classList.remove("bot-responding", "chats-active");
    });
})
   const deleteBtn = document.querySelector("#delete-chat-btn");

deleteBtn.addEventListener("click", () => {
    chatContainer.innerHTML = "";
    chatHistory.length = 0;
    userData.file = {};
    promptInput.value = "";
    fileUploadWrapper.classList.remove("active", "img-attached", "file-attached");
    document.body.classList.remove("bot-responding");
});

themeToggle.addEventListener("click", () => {
   const isLightTheme = document.body.classList.toggle("light-theme");
   localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");
   themeToggle.textContent = isLightTheme ? "dark_model" : "light_mode";
});

const isLightTheme = localStorage.getItem("themeColor") === "light_mode";
document.body.classList.toggle("light-theme", isLightTheme);
themeToggle.textContent = isLightTheme ? "dark_model" : "light_mode";
    

promptForm.addEventListener("submit",handleFormSubmit);
promptForm.querySelector("#add-file-btn").addEventListener("click", () => fileInput.click());