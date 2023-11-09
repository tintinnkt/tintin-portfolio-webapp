import {useState} from 'react';
import style from '../../style/contentStyle/contact.module.css';
import ContentHeader from '../ContentHeader';

type ContactProps = {
  srcImg: string;
  text: string[];
  url: string;
}

const Contactbox = ({ srcImg, text, url }: ContactProps) => {
  const isClickable = url !== "";

  const handleCopyText = (textToCopy: string, index: number) => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = textToCopy;
    tempInput.select();
    if (document.execCommand('copy')) {
      setCopySuccess(index);
      setTimeout(() => setCopySuccess(null), 2500);
    }
    document.body.removeChild(tempInput);
  };

  const [copySuccess, setCopySuccess] = useState<number | null>(null);

  return (
    <div className={style.contactlist}>
      <img src={srcImg} alt="" />
      <div className={style.colon}>
        <div />
        <div />
      </div>
      {isClickable ? (
        <a href={url}>{text}</a>
      ) : (
        <span className={style.bigspan}>
          {text.map((item, index) => (
            <span
              className={style.littlespan}
              key={index}
              onClick={() => handleCopyText(item, index)}
            >
              {copySuccess === index ? (
                <div className={style.copySuccessMessage}>Copied!</div>
              ) : (
                item
              )}
            </span>
          ))}
        </span>
      )}
    </div>
  );
};


const contactListdata = [
  {
    srcImg: "https://cdn-icons-png.flaticon.com/512/3677/3677211.png",
    text: ["Krittin Tragunjindarat"],
    url: "https://www.facebook.com/krittin.tragunejindarat",
  },
  {
    srcImg: "https://cdn-icons-png.flaticon.com/512/725/725278.png",
    text: ["tintinnkt"],
    url: "",
  },
  {
    srcImg: "https://cdn-icons-png.flaticon.com/512/3059/3059590.png",
    text: ["+66 09609642818"],
    url: "",
  },
  {
    srcImg: "https://cdn-icons-png.flaticon.com/512/3059/3059989.png",
    text: ["itin752@gmail.com", "tintinabc48090@gmail.com"],
    url: "",
  },
]


const Contact = () => {
  return (
    <div className={style.container}>
      <ContentHeader name="Contact Me" componentProp={null} />
      <main className={style.contents}>
        <ul>
          {contactListdata.map((element, index) => (
            <li key={index}>
              <Contactbox srcImg={element.srcImg} url={element.url} text={element.text}></Contactbox>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Contact;
