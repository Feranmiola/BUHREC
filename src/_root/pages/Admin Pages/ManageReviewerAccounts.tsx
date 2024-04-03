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
  useToast,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PropTypes from "prop-types";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Edit as EditIcon } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

const lecturersData = [
  {
    name: "James Markman",
    reviewerEmail:"text@email.com",
    phone: "23455772628",
    dateCreated: "2022-03-12",
    discipline: "Engineering",
    papersReviewed: "3",
  },
  {
    name: "James Markman",
    reviewerEmail:"text@email.com",
    phone: "23455772628",
    dateCreated: "2022-03-12",
    discipline: "Engineering",
    papersReviewed: "3",
  },
  {
    name: "James Markman",
    reviewerEmail:"text@email.com",
    phone: "23455772628",
    dateCreated: "2022-03-12",
    discipline: "Engineering",
    papersReviewed: "3",
  },
  {
    name: "James Markman",
    reviewerEmail:"text@email.com",
    phone: "23455772628",
    dateCreated: "2022-03-12",
    discipline: "Engineering",
    papersReviewed: "3",
  },
  {
    name: "James Markman",
    reviewerEmail:"text@email.com",
    phone: "23455772628",
    dateCreated: "2022-03-12",
    discipline: "Engineering",
    papersReviewed: "3",
  },
  {
    name: "James Markman",
    reviewerEmail:"text@email.com",
    phone: "23455772628",
    dateCreated: "2022-03-12",
    discipline: "Engineering",
    papersReviewed: "3",
  },
  // ... other data
];

interface StyledTextProps {
  children: ReactNode;
  className?: string;
}

const PAGE_SIZE = 7;


const ManageReviewerAccounts = () => {
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
    const toast = useToast();

    const handleDalate =()=>{
      toast({
        variant: "mydeafult", 
        title: "Successfully Deleted",
      })
    }
  
  
    
    const totalRows = Math.ceil(filteredRows.length / PAGE_SIZE);
    const totalPages = Math.max(totalRows, 1);
  
  
  return (<div className=' justify-center items-center'>
  <div className='  flex justify-between items-start'>
    <h2 className='font-roboto text-dashboard-page-header-purple  text-3xl font-semibold py-16 px-16'>Reviewer Accounts</h2>
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
                <Th className="px-6 py-3 whitespace-nowrap">Name</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Email</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Phone</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Date Created</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Discipline</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Reviewed</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredRows.map(({ name, reviewerEmail, phone, dateCreated, discipline, papersReviewed }, index) => (
                <Tr key={index}>
                    <Td className="px-6 py-4 whitespace-nowrap">{name}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{reviewerEmail}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{phone}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{dateCreated}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{discipline}</Td>
                    <Td className="px-6 py-4 whitespace-nowrap">{papersReviewed}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <Spacer />
                    <Flex
                      className=""
                      
                      align="center"
                    >
                      <Button
                      onClick={handleDalate}
                      className=" bg-red-200 hover:bg-red-400 hover:text-white h-9"
                      >Delete Account</Button>
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
                <Th className="px-6 py-3 whitespace-nowrap">Email</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Phone</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Date Created</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Discipline</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Reviewed</Th>
                <Th className="px-6 py-3 whitespace-nowrap">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
            {currentData.map(({ name, reviewerEmail, phone, dateCreated, discipline, papersReviewed }, index) => (
                <Tr key={index}>
                  <Td className="px-6 py-4 whitespace-nowrap">{name}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">{reviewerEmail}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">{phone}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">{dateCreated}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">{discipline}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">{papersReviewed}</Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <Spacer />
                    <Flex
                      align="center"
                    >
                      <Button
                      onClick={handleDalate}
                      className=" bg-red-200 hover:bg-red-400 hover:text-white h-9"
                      >Delete Account</Button>
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

export default ManageReviewerAccounts