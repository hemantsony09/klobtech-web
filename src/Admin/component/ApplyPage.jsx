import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function ApplyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);

  // Dummy applicant data (Replace this with API call)
  useEffect(() => {
    const fetchedApplicants = [
      { id: 1, name: "Alice Johnson", number:'2345676543', email: "alice@example.com", resume: "View Resume" },
      { id: 2, name: "Bob Smith", number:'2345676543', email: "bob@example.com", resume: "View Resume" },
      { id: 3, name: "Charlie Davis", number:'2345676543', email: "charlie@example.com", resume: "View Resume" },
    ];
    setApplicants(fetchedApplicants);
  }, [id]);

  return (
    <div className="p-12 flex flex-col items-center min-h-screen bg-gray-100">
      <Paper className="p-8 shadow-lg w-full ">
        <Typography variant="h4" className="mb-4 font-bold text-center">
          Applicants for Job ID: {id}
        </Typography>

        {/* Applicants Table */}
        <TableContainer component={Paper} className="shadow-md">
          <Table>
            <TableHead className="bg-gray-200">
              <TableRow>
                <TableCell  sx={{fontSize:20}} className="font-bold">Name</TableCell>
                <TableCell  sx={{fontSize:20}} className="font-bold">Email</TableCell>
                <TableCell  sx={{fontSize:20}} className="font-bold">Number</TableCell>
                <TableCell  sx={{fontSize:20}} className="font-bold">Resume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applicants.length > 0 ? (
                applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell sx={{fontSize:20}}>{applicant.name}</TableCell>
                    <TableCell sx={{fontSize:20}}>{applicant.email}</TableCell>
                    <TableCell sx={{fontSize:20}}>{applicant.number}</TableCell>
                    <TableCell sx={{fontSize:20}}>
                      <Button variant="contained" sx={{fontSize:15}} color="primary" size="small">
                        {applicant.resume}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    No applicants found for this job.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        
      </Paper>
    </div>
  );
}

export default ApplyPage;
