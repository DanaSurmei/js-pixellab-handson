const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = 'Nu stim ce broswer folosesti';

if (userAgentString.includes('chrome')) {
  message = 'Navighez folosind Chrome';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
