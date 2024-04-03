import React, { useState, ReactNode } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Flex,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PropTypes from "prop-types";
// const html2pdf = require('html2pdf.js');
import html2pdf from 'html2pdf.js';
import ReactDOM from 'react-dom';
import { useToast } from "@/components/ui/use-toast"
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Edit as EditIcon } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

const lecturersData = [
  {
    name: "The Advent of technology in society",
    author: "Jakob, Vance",
    reviewer: "James Markman",
    reviewerEmail:"text@email.com",
    date: "2022-03-12",
    paid: "Yes",
    status: "Reviewing",
  },
  {
    name: "The Advent of technology in society",
    author: "Jakob, Vance",
    reviewer: "James Markman",
    reviewerEmail:"text@email.com",
    date: "2022-03-12",
    paid: "Yes",
    status: "Reviewed",
  },
  {
    name: "The Advent of technology in society",
    author: "Jakob, Vance",
    reviewer: "James Markman",
    reviewerEmail:"text@email.com",
    date: "2022-03-12",
    paid: "Yes",
    status: "Not Reviewed",
  },
  {
    name: "The Advent of technology in society",
    author: "Jakob, Vance",
    reviewer: "James Markman",
    reviewerEmail:"text@email.com",
    date: "2022-03-12",
    paid: "Yes",
    status: "Reviewing",
  },
  {
    name: "The Advent of technology in society",
    author: "Jakob, Vance",
    reviewer: "James Markman",
    reviewerEmail:"text@email.com",
    date: "2022-03-12",
    paid: "Yes",
    status: "Reviewing",
  },
  {
    name: "The Advent of technology in society",
    author: "Jakob, Vance",
    reviewer: "James Markman",
    reviewerEmail:"text@email.com",
    date: "2022-03-12",
    paid: "Yes",
    status: "Reviewing",
  },
  // ... other data
];

interface StyledTextProps {
  children: ReactNode;
  className?: string;
}

const PAGE_SIZE = 7;


const StudentReviews = () => {

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredRows = lecturersData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );


  const currentData = filteredRows.slice(
    (currentPage - 1) * PAGE_SIZE,
    Math.min((currentPage - 1) * PAGE_SIZE + PAGE_SIZE + 1, filteredRows.length)
  );

  

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  
  const { toast } = useToast()

  
  const totalRows = Math.ceil(filteredRows.length / PAGE_SIZE);
  const totalPages = Math.max(totalRows, 1);

  const downloadCertificate = (title: string, author: string, year: number, reviewer: string, reviewed: string) => {
    if(reviewed == "Reviewed"){
        const certificate = (
          <div id="certificate" className="border-4 border-black border-double p-6 bg-white">
            <h1 className="text-3xl font-roboto font-bold text-center text-title-purple">BUHREC</h1>
            <div className=" p-6">
              <section className="flex flex-col pt-10">
                <h1 className="text-center font-poppins text-4xl mt-5">Certificate of Review of</h1>
                <h1 className="text-center font-roboto font-bold text-5xl mt-5  text-text-purple">{title}</h1>
                <h2 className="text-center text-2xl font-poppins font-semibold mt-7">Author: {author}</h2>
              </section>
              <h3 className="text-center font-poppins font-semibold mt-7">Year: {year}</h3>
              <div className="mt-7" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="justify-centers items-center flex flex-col">
                  <p className="font-poppins font-semibold">SIGNED</p>
                  <p className="font-poppins font-bold">{reviewer}</p>
                </div>
                <div>
                  <p className="font-poppins font-semibold flex flex-col">SIGNED</p>
                  <p className="font-poppins font-bold">BUHREC</p>
                </div>
              </div>
            </div>
          </div>
        );
    
        const tempDiv = document.createElement('div');
        document.body.appendChild(tempDiv);
    
        ReactDOM.render(certificate, tempDiv, () => {
          html2pdf().set({
            margin: 1,
            filename: 'certificate.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3, logging: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
          }).from(tempDiv).save();
    
          document.body.removeChild(tempDiv);
        });
    }else{
      toast({
        variant: "destructive",
        title: "Paper not Reviewed Yet",
        description: "Come back later",
      })
    }
    
  };



  return (
    <div className=' justify-center items-center'>
      <div className='  flex justify-between items-start'>
        <h2 className='font-roboto text-dashboard-page-header-purple  text-3xl font-semibold py-16 px-16'>Manage Reviews</h2>
        <h2 className='font-roboto text-xl py-16 px-16'>Welcome <span className='font-roboto text-highlight-purple'>Mr Kalesanwo</span> </h2>
      </div>
      <div>
        <Box mb="1rem">
          <Flex justify="space-between" align="center">
            <InputGroup w="50%">
              <InputLeftAddon children="Search:" />
              <Input
                value={searchValue}
                onChange={handleSearch}
                placeholder="Type something to search..."
              />
            </InputGroup>
          </Flex>
          <ScrollArea style={{ height: '500px', width: '100%' }} >
            <ScrollBar orientation="vertical" className="w-2 fill-black"/>
          <TableContainer overflowY="auto">
            {searchValue ? (
              <Table variant="striped" colorScheme="gray" className="min-w-full divide-y divide-gray-300">
                <Thead>
                  <Tr>
                    <Th className="px-6 py-3 whitespace-nowrap">Name</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Reviewer</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Email</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Date Submitted</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Paid</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Status</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredRows.map(({ name, author, reviewer, reviewerEmail, date, paid, status }, index) => (
                    <Tr key={index}>
                        <Td className="px-6 py-4 whitespace-nowrap">{name}</Td>
                        <Td className="px-6 py-4 whitespace-nowrap">{reviewer}</Td>
                        <Td className="px-6 py-4 whitespace-nowrap">{reviewerEmail}</Td>
                        <Td className="px-6 py-4 whitespace-nowrap">
                        {date && <span>{date}</span>}
                      </Td>
                      <Td className="px-6 py-4 whitespace-nowrap">
                        {paid && <span>{paid}</span>}
                      </Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{status}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">
                        
                        <Flex
                          className=""
                          
                          align="center"
                        >
                           <Button className="ml-5 bg-green-300 h-9 hover:bg-green-400"  
                           onClick={() => downloadCertificate(name, author, 2024, reviewer, status)}>Get Certificate</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
                <Table variant="striped" colorScheme="gray" className="min-w-full divide-y divide-gray-300">
                  <Thead>
                    <Tr>
                    <Th className="px-6 py-3 whitespace-nowrap">Name</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Reviewer</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Email</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Date Submitted</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Paid</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Status</Th>
                    <Th className="px-6 py-3 whitespace-nowrap">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                {currentData.map(({ name, author, reviewer, reviewerEmail, date, paid, status }, index) => (
                    <Tr key={index}>
                      <Td className="px-6 py-4 whitespace-nowrap">{name}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{reviewer}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{reviewerEmail}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{date}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{paid}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">{status}</Td>
                      <Td className="px-6 py-4 whitespace-nowrap">
                        
                        <Flex
                          className=" justify-center items-center"
                        >
                           <Button className="ml-5 bg-green-300 h-9 hover:bg-green-400"  
                           onClick={() => downloadCertificate(name, author, 2024, reviewer, status)}>Get Certificate</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </TableContainer>
        </ScrollArea>

          {searchValue && !filteredRows.length && (
            <div className="text-red-500 text-sm mx-auto mt-2">No Matches Found.</div>
          )}

          <Flex
            className="justify-between items-center my-4"
            justify="space-between"
            align="center"
          >
            <ChakraButton
              disabled={currentPage === 1}
              onClick={handlePrevPage}
              variant="link"
              size="xs"
            >
              {"<< Previous"}
            </ChakraButton>
            <div>
              <StyledText>{`Page ${currentPage} of ${totalPages}`}</StyledText>
            </div>
            <ChakraButton
              disabled={currentPage >= totalPages}
              onClick={handleNextPage}
              variant="link"
              size="xs"
            >
              {"Next >>"}
            </ChakraButton>
          </Flex>
        </Box>
      </div>
      
    </div>
  )
}

const StyledText: React.FC<StyledTextProps> = ({ children, className }) => {
  return <div className={`inline-block text-gray-500 font-medium ${className}`}>{children}</div>;
};

StyledText.propTypes = {
  /** Children nodes passed to the component */
  children: PropTypes.node.isRequired,
  /** Classes passed to the component */
  className: PropTypes.string,
};

export default StudentReviews