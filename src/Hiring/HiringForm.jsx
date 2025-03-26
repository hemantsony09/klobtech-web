  import { useState } from "react";
  import { motion } from "framer-motion";
  import Navbar from "../Nav/Navbar";
  import "./Hiring.css";

  const jobRoles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer"];
  const workModes = ["Work From Home", "On-Site", "Hybrid"];
  const locations = ["Jaipur", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];

  const HiringPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      jobRole: "",
      workMode: "",
      skills: "",
      about: "",
      githubLink: "",
      projectRole: "",
      resume: null,
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
      setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data:", formData);
    };

    return (
      <div>
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
            <p>Please fill out this form to be a part of our team.</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-solid shadow-lg overflow-hidden rounded-[40px] my-[100px] w-3/4 mx-auto mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="full-box relative  grid inputs grid-cols-2 gap-10">
            <motion.div
              className="p-20 box-1 flex flex-col gap-10"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-[25px] font-bold">General Information</h1>
              {["name", "email", "mobile"].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required
                      onChange={handleChange}
                      className="w-full p-2 border rounded bg-transparent border-solid"
                      placeholder={`Enter your ${field}...`}
                    />
                  </label>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <label>Job Designation:
                  <select name="jobRole" required onChange={handleChange} className="w-full p-2 border rounded bg-transparent border-solid">
                    <option value="">Select</option>
                    {jobRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </label>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <label>Work Mode:
                  <select name="workMode" required onChange={handleChange} className="w-full p-2 border rounded bg-transparent border-solid">
                    <option value="">Select</option>
                    {workModes.map((mode) => (
                      <option key={mode} value={mode}>{mode}</option>
                    ))}
                  </select>
                </label>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <label>Location:
                  <select name="location" required onChange={handleChange} className="w-full p-2 border rounded bg-transparent border-solid">
                    <option value="">Select</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </label>
              </motion.div>
              <motion.div
                className="text-center btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button type="submit" className=" text-white px-6 py-2 rounded ">
                  Submit Application
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-[#24CCB5] flex flex-col gap-10 box-2  text-white p-20"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-[25px] font-bold">Technical Skills Information</h1>
            
              <motion.div
            
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, }}
          >
            <label>
            Why should you be hired for this role?
              <textarea
                
                rows="1"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded bg-transparent border-solid"
                placeholder={`Mention relevant skill or past experience for this role. `}
              ></textarea>
            </label>
          </motion.div> 
          <motion.div
            
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, }}
          >
            <label>
            Skills  
              <textarea
                
                rows="1"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded bg-transparent border-solid"
                placeholder={`Programming languages, Frameworks, etc.)`}
              ></textarea>
            </label>
          </motion.div> <motion.div
            
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, }}
          >
            <label>
              Github link
              <textarea
                
                rows="1"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded bg-transparent border-solid"
                placeholder={`Project Link realted to the role`}
              ></textarea>
            </label>
          </motion.div> <motion.div
            
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, }}
          >
            <label>
            Your Role in Project
              <textarea
                
                rows="1"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded bg-transparent border-solid"
                placeholder={`Mention your role in the project`}
              ></textarea>
            </label>
          </motion.div>
          
                  <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-white transition-all"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileChange(e);
                }}
              >



                <input type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
                <label htmlFor="resume" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-[black] transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l5-5m0 0l5 5m-5-5v12M5 12h14M19 12a7 7 0 10-14 0 7 7 0 0014 0z"></path>
                    </svg>
                    <p className="mt-2 text-black  ">Drag & Drop or Click to Upload Resume</p>
                    <p className="text-sm text-black ">(PDF, DOC, DOCX allowed)</p>
                  </div>
                </label>
                {formData.resume && <p className="mt-3 text-black">✅ {formData.resume.name}</p>}
              </motion.div>

              
            </motion.div>
          </div>
        </motion.form>
      </div>
    );
  };

  export default HiringPage;
