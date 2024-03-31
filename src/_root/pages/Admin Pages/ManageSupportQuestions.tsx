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
  Spacer,
  Flex,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PropTypes from "prop-types";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Edit as EditIcon } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



const lecturersData = [
  {
    user: "James Markman",
    userEmail:"text@email.com",
    dateSubmitted: "2022-03-12",
    complaint: "I am writing to express my dissatisfaction with the navigation of your website. I've been a regular user of your services, but lately, I've been having a hard time finding the information I need.The layout seems to have changed and it's not as user-friendly as it used to be. The menus are confusing and it's hard to find specific sections. I often find myself lost and clicking around aimlessly, which is frustrating and time-consuming. Additionally, the search function doesn't seem to be working properly. It often doesn't return relevant results, making it even harder to find what I'm looking for. I hope you take this feedback into consideration and work on improving the website navigation and search functionality. A more intuitive design would greatly enhance the user experience. Thank you for your attention to this matter.",
  },
  {
    user: "James Markman",
    userEmail:"text@email.com",
    dateSubmitted: "2022-03-12",
    complaint: "I am writing to express my dissatisfaction with the navigation of your website. I've been a regular user of your services, but lately, I've been having a hard time finding the information I need.The layout seems to have changed and it's not as user-friendly as it used to be. The menus are confusing and it's hard to find specific sections. I often find myself lost and clicking around aimlessly, which is frustrating and time-consuming. Additionally, the search function doesn't seem to be working properly. It often doesn't return relevant results, making it even harder to find what I'm looking for. I hope you take this feedback into consideration and work on improving the website navigation and search functionality. A more intuitive design would greatly enhance the user experience. Thank you for your attention to this matter.",
  },
  {
    user: "James Markman",
    userEmail:"text@email.com",
    dateSubmitted: "2022-03-12",
    complaint: "I am writing to express my dissatisfaction with the navigation of your website. I've been a regular user of your services, but lately, I've been having a hard time finding the information I need.The layout seems to have changed and it's not as user-friendly as it used to be. The menus are confusing and it's hard to find specific sections. I often find myself lost and clicking around aimlessly, which is frustrating and time-consuming. Additionally, the search function doesn't seem to be working properly. It often doesn't return relevant results, making it even harder to find what I'm looking for. I hope you take this feedback into consideration and work on improving the website navigation and search functionality. A more intuitive design would greatly enhance the user experience. Thank you for your attention to this matter.",
  },
  {
    user: "James Markman",
    userEmail:"text@email.com",
    dateSubmitted: "2022-03-12",
    complaint: "I am writing to express my dissatisfaction with the navigation of your website. I've been a regular user of your services, but lately, I've been having a hard time finding the information I need.The layout seems to have changed and it's not as user-friendly as it used to be. The menus are confusing and it's hard to find specific sections. I often find myself lost and clicking around aimlessly, which is frustrating and time-consuming. Additionally, the search function doesn't seem to be working properly. It often doesn't return relevant results, making it even harder to find what I'm looking for. I hope you take this feedback into consideration and work on improving the website navigation and search functionality. A more intuitive design would greatly enhance the user experience. Thank you for your attention to this matter.",
  },
  {
    user: "James Markman",
    userEmail:"text@email.com",
    dateSubmitted: "2022-03-12",
    complaint: "I am writing to express my dissatisfaction with the navigation of your website. I've been a regular user of your services, but lately, I've been having a hard time finding the information I need.The layout seems to have changed and it's not as user-friendly as it used to be. The menus are confusing and it's hard to find specific sections. I often find myself lost and clicking around aimlessly, which is frustrating and time-consuming. Additionally, the search function doesn't seem to be working properly. It often doesn't return relevant results, making it even harder to find what I'm looking for. I hope you take this feedback into consideration and work on improving the website navigation and search functionality. A more intuitive design would greatly enhance the user experience. Thank you for your attention to this matter.",
  },
  {
    user: "James Markman",
    userEmail:"text@email.com",
    dateSubmitted: "2022-03-12",
    complaint: "I am writing to express my dissatisfaction with the navigation of your website. I've been a regular user of your services, but lately, I've been having a hard time finding the information I need.The layout seems to have changed and it's not as user-friendly as it used to be. The menus are confusing and it's hard to find specific sections. I often find myself lost and clicking around aimlessly, which is frustrating and time-consuming. Additionally, the search function doesn't seem to be working properly. It often doesn't return relevant results, making it even harder to find what I'm looking for. I hope you take this feedback into consideration and work on improving the website navigation and search functionality. A more intuitive design would greatly enhance the user experience. Thank you for your attention to this matter.",
  },
  // ... other data
];

interface StyledTextProps {
  children: ReactNode;
  className?: string;
}

const PAGE_SIZE = 7;



const ManageSupportQuestions = () => {
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
  
    
    const totalRows = Math.ceil(filteredRows.length / PAGE_SIZE);
    const totalPages = Math.max(totalRows, 1);

    type ExpandedRowProps = {
      user: string;
      userEmail: string;
      complaint: string;
    };
    
    const ExpandedRow: React.FC<ExpandedRowProps> = ({ user, userEmail, complaint }) => {
      return (
        <div className="bg-white w-96">
            <div className=" text-black ">
              User Name: {user}
            </div>
            <div className=" text-black ">
              User Email: {userEmail}
            </div>
            <div className=" text-black ">
              Complaint: {complaint
                .split(/(.{43})/)
                .filter((item) => !!item)
                .map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    {index < complaint.length / 43 - 1 && <br/> }
                  </React.Fragment>
                ))}
            </div>
        </div>
        
      );
    };
  
  
  return (<div className=' justify-center items-center'>
  <div className='  flex justify-between items-start'>
    <h2 className='font-roboto text-dashboard-page-header-purple  text-3xl font-semibold py-16 px-16'>Support</h2>
    <h2 className='font-roboto text-xl py-16 px-16'>Welcome, <span className='font-roboto text-highlight-purple'>Admin</span> </h2>
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
                <Th className="px-6 py-3 whitespace-nowrap">User Name</Th>
                <Th className="px-6 py-3 whitespace-nowrap">User Email</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Date Submitted</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Complaint</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredRows.map(({ user, userEmail, complaint, dateSubmitted }, index) => (
                <Tr key={index}>
                     <Td className="px-6 py-4 whitespace-nowrap">
                  <HoverCard>
                        <HoverCardTrigger>
                          {user}
                          </HoverCardTrigger>
                        <HoverCardContent className="bg-white w-96">
                          <ExpandedRow
                          user={user}
                          userEmail={userEmail}
                          complaint={complaint}
                        />
                        </HoverCardContent>
                      </HoverCard>
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{userEmail}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{dateSubmitted}</Td>
                    <Td className="px-6 py-4 truncate whitespace-nowrap" title={complaint}>{complaint?.substring(0, 25) || ''}…</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <Spacer />
                    <Flex
                      className=""
                      
                      align="center"
                    >
                      <Button className=" bg-blue-200 hover:bg-blue-400  h-9">Reply</Button>
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
                <Th className="px-6 py-3 whitespace-nowrap">User Name</Th>
                <Th className="px-6 py-3 whitespace-nowrap">User Email</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Date Submitted</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Complaint</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
            {currentData.map(({ user, userEmail, complaint, dateSubmitted }, index) => (
                <Tr key={index}>
                  <Td className="px-6 py-4 whitespace-nowrap">
                  <HoverCard>
                        <HoverCardTrigger>
                          {user}
                          </HoverCardTrigger>
                        <HoverCardContent className="bg-white w-96">
                          <ExpandedRow
                          user={user}
                          userEmail={userEmail}
                          complaint={complaint}
                        />
                        </HoverCardContent>
                      </HoverCard>
                    </Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{userEmail}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{dateSubmitted}</Td>
                    <Td className="px-6 py-4 truncate whitespace-nowrap" title={complaint}>{complaint?.substring(0, 25) || ''}…</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <Spacer />
                    <Flex
                      align="center"
                    >
                      <Button className=" bg-blue-200 hover:bg-blue-400  h-9">Reply</Button>
                      
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

export default ManageSupportQuestions