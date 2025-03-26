import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const jobPositions = [
  {
    company: "KLobTech",
    role: "Full Stack Developer",
    description: "We are looking for a talented Full Stack Developer to join our team. As a part-time developer, you will design, develop, and maintain frontend and backend applications, ensuring scalability and performance using modern frameworks and databases.",
    skills: ["Node.js Developer", "React Developer", "MongoDB Specialist", "SEO Expert"],
  },
  {
    company: "KLobTech",
    role: "Frontend Developer",
    description: "We are hiring a Frontend Developer with experience in modern JavaScript frameworks like React and Next.js. You will create user-friendly, high-performance applications, ensuring great UI/UX and seamless functionality.",
    skills: ["React Developer", "Next.js Developer", "Tailwind CSS Expert"],
  },
  {
    company: "KLobTech",
    role: "Backend Developer",
    description: "We need a Backend Developer for managing databases, designing APIs, and ensuring security. Strong Node.js skills and experience with GraphQL are preferred. You'll work on scalable backend solutions.",
    skills: ["Node.js Developer", "MongoDB Specialist", "GraphQL Expert"],
  }
];

function HiringTable() {
  const [openDialog, setOpenDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleOpenDialog = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedJob(null);
  };
  const filteredJobs = jobPositions.filter(job =>
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleApplyClick = () => {
    navigate('/hiring/apply');
  };

  const truncateDescription = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="flex flex-col justify-center my-[100px] items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold text-[5rem]">
          We are <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech
        </h1>
        <div className="text-center text-[2.5rem]">
          <h3>We are open for the following positions</h3>
          <h3 className='text-[#333333]'>We also hire for other companies. If you are looking to hire, feel free to connect with us.</h3>
        </div>
      </motion.div>

      <div className="flex flex-col items-center">
      <div className="flex w-[90vw]  justify-end mb-10">
      
        <motion.input
          type="text"
          placeholder="Search for jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[300px] p-4 border-b-[1px] border-black text-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          />
      </div>
        {filteredJobs.map((job, index) => (
          <motion.div
            key={index}
            className="border-t-[1px] flex flex-row gap-10 border-solid px-20 p-10 border-black w-[90vw] relative cursor-pointer"
            onClick={() => handleOpenDialog(job)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Top-right Buttons */}
            <div className="absolute top-2 right-2 flex gap-3">
              <button
              style={{backgroundColor: "var(--accent-color)"}}
                className="  text-[17px] text-white px-4 py-2 rounded flex items-center "
                onClick={(e) => {
                  e.stopPropagation();
                  handleApplyClick();
                }}
              >
                <CheckCircleIcon /> Apply
              </button>
              
            </div>

            <div>
              <img src="./logo1.png" width={200} alt="Company Logo" />
            </div>

            <div>
              <h1 className="font-semibold text-[24px]">{job.company}</h1>
              <h2 className="text-[20px]">{job.role}</h2>
              <p className="text-[16px] text-[#333333]">{truncateDescription(job.description, 35)}</p>
              <ul className="flex text-[1.6rem] py-10 gap-10 flex-wrap">
                {job.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    style={{ backgroundColor: "var(--accent-color)" }}
                    className="text-white cursor-default border-[1px] p-3 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Dialog for Job Details */}
      <AnimatePresence>
        {openDialog && selectedJob && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-10 rounded-lg shadow-lg max-w-4xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold">{selectedJob.role}</h2>
              <h3 className="text-4xl font-semibold">{selectedJob.company}</h3>
              <p className="mt-4">{selectedJob.description}</p>
              <h4 className="mt-4 font-semibold">Required Skills:</h4>
              <ul className="list-disc ml-5 mt-2">
                {selectedJob.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
              <motion.button
                style={{ backgroundColor: "var(--accent-color)" }}
                className="mt-6 text-white px-4 py-2 rounded"
                onClick={handleCloseDialog}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HiringTable;
