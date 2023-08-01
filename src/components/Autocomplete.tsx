import { useEffect, useRef } from "react";

import { Country } from "../modules/types";

import useAutocomplete from "../hooks/hooks"

import "../assets/styles.css";

import { Col, Row, Card, Text } from "../assets/styles";

interface Props {
  data: Country[];
}

const Autocomplete = ({ data }: Props) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  const {
    searchedValue,
    suggestions,
    selectedSuggestion,
    activeSuggestion,
    handleChange,
    handleKeyDown,
    handleClick,
  } = useAutocomplete(data, inputSearchRef.current);

  return (
    <div className='autocomplete'>
      <input
        placeholder="Search your Country"
        value={searchedValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputSearchRef}
      />

        <Card style={{ padding: "0" }}>
          {!suggestions.length &&
          searchedValue.length &&
          !selectedSuggestion.length ? (
            <Row className='itemListNot'>
              <Col>
                <Text>Nothing to show.</Text>
              </Col>
            </Row>
          ) : (
            <>
              {suggestions.map(({ name }: Country, index) => (
                <Row
                  key={index}
                  className={`itemList ${
                    index === activeSuggestion - 1 ? 'activeItem' : ""
                  }`}
                  onClick={() => handleClick(name.common)}
                >
                  <Col>
                    <Text>
                      {name.common}
                    </Text>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Card>
      <Row style={{marginTop: '1rem'}}>  
        <Text>Country selected: {selectedSuggestion}</Text>
      </Row>     
    </div>
  );
};

export default Autocomplete;