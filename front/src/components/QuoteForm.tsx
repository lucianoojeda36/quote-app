'use client';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { useQuoteStore, useSearchStore } from '@/store/searchStore';

const fetchCryptosFromIA = async () => {
  return [
    'BTC',
    'ETH',
    'USDT',
    'BNB',
    'ADA',
    'XRP',
    'DOGE',
    'DOT',
    'UNI',
    'LINK',
  ];
};

const QuoteForm: React.FC = () => {
  const {
    amount,
    setFrom,
    setTo,
    setAmount,
    from: selectedCryptoFrom,
    to: selectedCryptoTo,
  } = useQuoteStore();
  const { reset, queryId } = useSearchStore();

  const [isCryptoOpen, setIsCryptoOpen] = useState(false);
  const [isCryptoFromOpen, setIsCryptoFromOpen] = useState(false);
  const [cryptos, setCryptos] = useState<string[]>([]);

  const cryptoToRef = useRef<HTMLDivElement>(null);
  const cryptoFromRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useRef(
    debounce((value: number) => {
      setAmount(value);
    }, 500),
  ).current;

  useEffect(() => {
    const fetchCryptos = async () => {
      const cryptosList = await fetchCryptosFromIA();
      setCryptos(cryptosList);
    };

    fetchCryptos();
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    value = value.replace(/[^0-9.,]/g, '');

    const hasComma = value.includes(',');
    const hasDot = value.includes('.');
    if (hasComma && hasDot) {
      value = value.replace('.', '');
    }

    const numericValue = Number(value.replace(',', '.'));
    if (!isNaN(numericValue)) {
      debouncedQuery(numericValue);
    }
  };

  const handleOptionClick = (
    type: 'cryptoTo' | 'cryptoFrom',
    value: string,
  ) => {
    if (type === 'cryptoTo') {
      setTo(value);
      setIsCryptoOpen(false);
    } else {
      setFrom(value);
      setIsCryptoFromOpen(false);
    }
  };

  useEffect(() => {
    if (queryId && selectedCryptoFrom && selectedCryptoTo && amount) {
      reset();
    }
  }, [queryId, reset, selectedCryptoFrom, selectedCryptoTo, amount]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cryptoToRef.current &&
        !cryptoToRef.current.contains(event.target as Node)
      ) {
        setIsCryptoOpen(false);
      }
      if (
        cryptoFromRef.current &&
        !cryptoFromRef.current.contains(event.target as Node)
      ) {
        setIsCryptoFromOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Title>Conversor de criptomonedas</Title>
      <Input
        type="text"
        placeholder="Introducir cantidad"
        value={amount || ''}
        onChange={handleAmountChange}
        required
      />

      <Wrapper>
        <Column>
          <Label>Moneda a convertir</Label>
          <SelectContainer ref={cryptoToRef}>
            <SelectedOption onClick={() => setIsCryptoOpen(!isCryptoOpen)}>
              {selectedCryptoTo || 'Seleccionar moneda'}
              <DropdownIcon>▼</DropdownIcon>
            </SelectedOption>
            {isCryptoOpen && (
              <DropdownMenu>
                {cryptos.map((crypto) => (
                  <DropdownItem
                    key={crypto}
                    onClick={() => handleOptionClick('cryptoTo', crypto)}
                  >
                    {crypto}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </SelectContainer>
        </Column>

        <Column>
          <Label>Moneda de destino</Label>
          <SelectContainer ref={cryptoFromRef}>
            <SelectedOption
              onClick={() => setIsCryptoFromOpen(!isCryptoFromOpen)}
            >
              {selectedCryptoFrom || 'Seleccionar moneda'}
              <DropdownIcon>▼</DropdownIcon>
            </SelectedOption>
            {isCryptoFromOpen && (
              <DropdownMenu>
                {cryptos.map((crypto) => (
                  <DropdownItem
                    key={crypto}
                    onClick={() => handleOptionClick('cryptoFrom', crypto)}
                  >
                    {crypto}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </SelectContainer>
        </Column>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 24px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  gap: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Column = styled.div`
  flex: 1;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const SelectedOption = styled.div`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const DropdownIcon = styled.span`
  font-size: 12px;
`;

export default QuoteForm;
