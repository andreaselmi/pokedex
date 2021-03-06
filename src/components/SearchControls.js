import React from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const SearchControls = ({ onChange, query, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup
          className="mt-3"
          style={{ maxWidth: "800px", margin: "auto" }}
        >
          <FormControl
            onChange={onChange}
            value={query}
            placeholder="Search by name or id..."
            aria-label="Search by name or id..."
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-secondary" className="btn">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default SearchControls;
