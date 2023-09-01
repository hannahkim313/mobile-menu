import githubImg from '../img/github-mark.svg';
import appendChildren from '../logic/helper-functions';

const createFooter = () => {
  const githubIcon = document.createElement('img');
  githubIcon.src = githubImg;
  githubIcon.alt = 'Github logo';

  const authorName = document.createElement('p');
  authorName.textContent = 'Hannah Kim';

  const link = document.createElement('a');
  link.href = 'https://github.com/hannahkim313';
  appendChildren(
    link,
    githubIcon,
    authorName,
  );

  const footer = document.createElement('footer');
  footer.appendChild(link);

  return footer;
};

export default createFooter;