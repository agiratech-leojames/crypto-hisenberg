import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { l1ApproveSetup, approveVerifyCountSetup, l1VerifySetup, l2ApproveVerifyCountSetup } from "../../integration/web3Client";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getWalletData } from '../../redux/counter/counterSlice';
import LoadingButton from '@mui/lab/LoadingButton';

const L1verification = () => {

  const [sid, setSid] = useState();
  const [hash, setHash] = useState();
  const walletData = useSelector(getWalletData);
  // const [uploading, setUploading] = useState(false);
  // const [approveCount, setApproveCount] = useState(false);

  const studentid = localStorage.getItem("studentId");
  // console.log("studentid", studentid)
  const navigate = useNavigate();
  

  const searchID = async () => {
    // setUploading(true)
    let verify1 = await l1VerifySetup("metamask", studentid)
    
    setHash(verify1)
    // setUploading(false)
      // console.log("Fetching data", walletData?.account, studentid, url)
  }

  const updateStatus = async (status) => {

    if(status == true){
    // setUploading(true)
    let approve1 = await l1ApproveSetup("metamask", walletData?.account, studentid, status)
    console.log("approve1", approve1)
    navigate("/student_upload_2");
    // setUploading(false)
  } else{
    let approve1 = await l1ApproveSetup("metamask", walletData?.account, studentid, status)
    
    console.log("approve1", approve1)

    let approveCount = await approveVerifyCountSetup("metamask", studentid)
    console.log("approve1Count", approveCount)
    //     // setApproveCount(approveCount);
    // // setUploading(true)
    if (approveCount == false){
      navigate("/student_upload_1");
    }else {
      navigate("/rejected_page"); 
    }
    
    
    
    
    
    
    // setUploading(false)
    
      // console.log("Fetching data", walletData?.account, studentid, url)
    }
  }



  return (
    <Grid container>
      <Grid
        item
        sm={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width={"50%"} mt={3}>
          <Typography fontSize={25} fontWeight={700}>
            L1 Verificiation
          </Typography>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Typography fontSize={20}>Enter student id :</Typography>
            <TextField
              sx={{
                ml: 3,
              }}
              required
              name="student_id"
              label="Student ID"
              id="outlined-required"
              value={sid}
              onChange={e => setSid(e.target.value)}
            />
            <Button variant="contained" sx={{ height: 50, ml: 3 }} onClick={searchID}>
              Search
            </Button>
          </Box>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              mt: 3,
            }}
          >
            <Typography fontSize={20} >
              {/* IPFS URL : https://ipfs.io/ipfs/
              QmUekmQdD9stUSswQ3Y8H14YXkQUtvBU5BKXHGVG7FJcB3 */}
            </Typography>
              <a href={hash} target="_blank">{hash}</a>
          </Box>

          <Box
            component={"form"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Button
              variant="contained" color="error" sx={{ height: 50, ml: 3 }} onClick={() => updateStatus(false)}
            >
              Reject
            </Button>
            <LoadingButton variant="contained" sx={{ height: 50, ml: 3 }} onClick={() => updateStatus(true)}>
              Approve
            </LoadingButton>
            {/* <LoadingButton color="primary" loading={uploading} variant="contained" onClick={onSubmitHandler}>
              Upload
            </LoadingButton> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default L1verification;
