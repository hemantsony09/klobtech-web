import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import '../../app.css';

function AdminDashboard() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Corp",
      skills: "React, JavaScript, CSS",
      package: "₹10 LPA",
      openings: 3,
      applied: 100,
      shortlisted: 50,
    },
    {
      id: 2,
      role: "Backend Developer",
      company: "InnoTech",
      skills: "Node.js, Express, MongoDB",
      package: "₹12 LPA",
      openings: 2,
      applied: 80,
      shortlisted: 40,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    role: "",
    company: "",
    skills: "",
    package: "",
    openings: "",
  });

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) =>
    setNewJob({ ...newJob, [e.target.name]: e.target.value });

  const handleAddJob = () => {
    if (!newJob.role || !newJob.company || !newJob.skills || !newJob.package || !newJob.openings) {
      alert("Please fill all fields");
      return;
    }
    setJobs([
      ...jobs,
      { id: jobs.length + 1, ...newJob, applied: 0, shortlisted: 0 },
    ]);
    setNewJob({ role: "", company: "", skills: "", package: "", openings: "" });
    handleClose();
  };

  const handleMenuOpen = (event, job) => {
    setMenuAnchor(event.currentTarget);
    setSelectedJob(job);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedJob(null);
  };

  const handleNavigate = (path) => {
    if (selectedJob) {
      navigate(`/${path}/${selectedJob.id}`);
      handleMenuClose();
    }
  };

  return (
    <div className="p-12 bg-gray-50 min-h-screen">
      <div>
        <h2 className="text-[4rem] font-bold m-5 text-center">
          <span style={{ color: "var(--accent-color)" }}>KLob</span>Tech Admin Panel
        </h2>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {[
          { label: "Total Applied", value: jobs.reduce((acc, job) => acc + job.applied, 0), color: "bg-blue-500" },
          { label: "Total Shortlisted", value: jobs.reduce((acc, job) => acc + job.shortlisted, 0), color: "bg-green-500" },
          { label: "Total Job Posts", value: jobs.length, color: "bg-yellow-500" },
        ].map((item, index) => (
          <div key={index} className={`${item.color} text-white rounded-xl shadow-lg p-12 text-center`}>
            <Typography variant="h4" className="font-bold">{item.label}</Typography>
            <Typography variant="h2" className="font-extrabold mt-3">{item.value}</Typography>
          </div>
        ))}
      </div>

      {/* Job Table & Create Button */}
      <div className="flex justify-between items-center mb-8">
        <Typography variant="h3" className="font-bold">Job Listings</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className="px-6 py-4"
          sx={{ fontSize: 16 }}
        >
          + Create Job
        </Button>
      </div>

      {/* Job Table */}
      <TableContainer component={Paper} className="shadow-lg">
        <Table sx={{ minWidth: 900 }} className="text-xl">
          <TableHead className="bg-gray-200">
            <TableRow>
              {["Job Role", "Company", "Skills", "Package", "Openings", "Applied", "Shortlisted", "Actions"].map((header, index) => (
                <TableCell key={index} sx={{ fontSize: 16 }} className="p-6 text-lg font-bold">{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id} className="bg-gray-50 hover:bg-gray-100">
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.role}</TableCell>
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.company}</TableCell>
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.skills}</TableCell>
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.package}</TableCell>
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.openings}</TableCell>
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.applied}</TableCell>
                <TableCell sx={{ fontSize: 16 }} className="p-6">{job.shortlisted}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuOpen(e, job)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 3-Dot Menu */}
      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleNavigate("apply")}>View Applied</MenuItem>
        <MenuItem onClick={() => handleNavigate("shortlisted")}>View Shortlisted</MenuItem>
      </Menu>

      {/* Create Job Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: 22 }} className="text-5xl font-bold">Create New Job</DialogTitle>
        <DialogContent className="space-y-6">
          {["Job Role", "Company Name", "Required Skills", "Package", "Openings"].map((label, index) => (
            <TextField
              key={index}
              label={label}
              name={label.toLowerCase().replace(/ /g, "")}
              fullWidth
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              placeholder={label === "Required Skills" ? "e.g., React, JavaScript, Node.js" : ""}
              sx={{
                fontSize: 20,
                "& .MuiInputBase-root": { fontSize: 20, padding: "14px" },
                "& .MuiInputLabel-root": { fontSize: 20 },
                "& input::placeholder": { fontSize: 20, opacity: 1 }
              }}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontSize: 16 }} color="error" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleAddJob} sx={{ fontSize: 16 }} color="primary" variant="contained">
            Create Job
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminDashboard;
