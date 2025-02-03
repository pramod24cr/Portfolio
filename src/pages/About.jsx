import { useState, useEffect } from 'react';
import TerminalCard from '../components/TerminalCard';
import PropTypes from 'prop-types';

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/pramod24cr')
      .then((response) => response.json())
      .then((data) => {
        setProfileImage(data.avatar_url);
      })
      .catch((error) => {
        console.error('Error fetching GitHub profile:', error);
        setProfileImage('/assets/Pramod.jpeg');
      });
  }, []);

  return (
    <div className="relative bg-[#1e1e1e] w-80 h-80 rounded-lg border-2 border-green-500 transform -rotate-6 hover:rotate-0 transition-transform duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
      <div className="w-72 h-72 rounded-lg overflow-hidden border-green-500">
        <img
          src={profileImage || '/assets/Pramod.jpeg'}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const SkillTag = ({ skill }) => (
  <span className="bg-[#2a2a2a] text-green-500 px-3 py-1 rounded text-sm hover:bg-green-500 hover:text-[#1e1e1e] transition-colors">
    {skill}
  </span>
);

SkillTag.propTypes = {
  skill: PropTypes.string.isRequired,
};

const ResumeButton = () => (
  <a
    href="src\components\assets\Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-[#2a2a2a] !text-green-500 px-4 py-2 rounded font-medium hover:bg-green-500 hover:!text-[#1e1e1e] transition-colors duration-200"
  >
    <span className="mr-2">$ cat</span>
    Resume.pdf
  </a>
);

const About = () => {
  const skills = ['Java', 'Spring-Boot', 'FEEL', 'JavaScript', 'React', 'MySQL'];
  const aboutText =
    'A passionate full-stack developer specializing in building secure, scalable web applications. I thrive on solving complex problems and continuously improving my skills to deliver high-quality solutions.';

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-24 px-4 md:px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-green-500 text-center text-2xl font-bold mb-10">
          {'<about>'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-start">
            <ProfileCard />
          </div>

          <div className="space-y-8">
            <TerminalCard
              command="whoami"
              output={
                <div className="space-y-4">
                  <p>{aboutText}</p>
                  <ResumeButton />
                </div>
              }
            />

            <TerminalCard
              command="cat skills.txt"
              output={
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              }
            />
          </div>
        </div>

        <h2 className="text-green-500 text-center text-2xl font-bold mt-10">
          {'</about>'}
        </h2>
      </div>
    </div>
  );
};

export default About;