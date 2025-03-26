import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function ShortlistedPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shortlisted, setShortlisted] = useState([]);

  // Dummy shortlisted data (Replace with API call)
  useEffect(() => {
    const fetchedShortlisted = [
      { id: 1, name: "Sophia Brown", number: "9876543210", email: "sophia@example.com", resume: "View Resume" },
      { id: 2, name: "Michael Scott", number: "8765432109", email: "michael@example.com", resume: "View Resume" },
      { id: 3, name: "Emily Davis", number: "7654321098", email: "emily@example.com", resume: "View Resume" },
    ];
    setShortlisted(fetchedShortlisted);
  }, [id]);

  return (
    <div className="p-12 flex flex-col items-center min-h-screen bg-gray-100">
      <Paper className="p-8 shadow-lg w-full">
        <Typography variant="h4" className="mb-4 font-bold text-center">
          Shortlisted Candidates for Job ID: {id}
        </Typography>

        {/* Shortlisted Candidates Table */}
        <TableContainer component={Paper} className="shadow-md">
          <Table>
            <TableHead className="bg-gray-200">
              <TableRow>
                <TableCell sx={{ fontSize: 20 }} className="font-bold">Name</TableCell>
                <TableCell sx={{ fontSize: 20 }} className="font-bold">Email</TableCell>
                <TableCell sx={{ fontSize: 20 }} className="font-bold">Number</TableCell>
                <TableCell sx={{ fontSize: 20 }} className="font-bold">Resume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shortlisted.length > 0 ? (
                shortlisted.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell sx={{ fontSize: 20 }}>{candidate.name}</TableCell>
                    <TableCell sx={{ fontSize: 20 }}>{candidate.email}</TableCell>
                    <TableCell sx={{ fontSize: 20 }}>{candidate.number}</TableCell>
                    <TableCell sx={{ fontSize: 20 }}>
                      <Button variant="contained" sx={{ fontSize: 15 }} color="primary" size="small">
                        {candidate.resume}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No shortlisted candidates found for this job.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Back Button */}
          
      </Paper>
    </div>
  );
}

export default ShortlistedPage;
