'use client';
import { useQuery } from '@tanstack/react-query';
import { useQuoteStore, useSearchStore } from '../store/searchStore';
import styled from 'styled-components';
import { fetchById } from '@/api/getchById';
import { format } from 'date-fns';
import { fetchRate } from '@/api/getRate';

const SearchResults: React.FC = () => {
  const { queryId } = useSearchStore();
  const { to, from, amount } = useQuoteStore();

  const {
    data: searchData,
    error: searchError,
    isLoading: isLoadingSearch,
  } = useQuery({
    queryKey: ['search', queryId],
    queryFn: () => (queryId ? fetchById(queryId) : null),
    enabled: !!queryId,
  });

  const {
    data: rateData,
    isLoading: isLoadingRate,
    error: rateError,
  } = useQuery({
    queryKey: ['rate', to, from, amount],
    queryFn: () => fetchRate(to, from, amount),
    enabled: !!amount && !!to && !!from && !queryId,
  });

  const isLoading = isLoadingRate || isLoadingSearch;
  const error = searchError || rateError;

  return (
    <ResultsContainer>
      {isLoading ? (
        <Message>Cargando...</Message>
      ) : error ? (
        <Message>Error al buscar</Message>
      ) : searchData ? (
        <ResultList>
          <Listdata>
            <DataTitle>
              De: {searchData.from} a {searchData.to}
            </DataTitle>
            <DataDetails>
              <strong>Monto: </strong>${searchData.amount}
              <br />
              <strong>Tasa: </strong>
              {searchData.rate}%
              <br />
              <strong>Monto convertido: </strong>${searchData.convertedAmount}
              <br />
              <strong>Fecha: </strong>
              {format(new Date(searchData.timestamp), 'dd/MM/yyyy HH:mm:ss')}
              <br />
              <strong>Expira el: </strong>
              {format(new Date(searchData.expiresAt), 'dd/MM/yyyy HH:mm:ss')}
            </DataDetails>
          </Listdata>
        </ResultList>
      ) : rateData ? (
        <ResultList>
          <Listdata>
            <DataTitle>
              De: {from} a {to}
            </DataTitle>
            <DataDetails>
              <strong>Monto: </strong>${amount}
              <br />
              <strong>Tasa: </strong>
              {rateData.rate}%
              <br />
              <strong>Monto convertido: </strong>${rateData.convertedAmount}
            </DataDetails>
          </Listdata>
        </ResultList>
      ) : (
        <Message>No se encontraron resultados</Message>
      )}
    </ResultsContainer>
  );
};

export default SearchResults;

const ResultsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  font-size: 16px;
  color: #777;
  text-align: center;
`;

const ResultList = styled.ul`
  list-style-type: none;
  padding: 20px;
`;

const Listdata = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const DataTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const DataDetails = styled.pre`
  font-size: 14px;
  color: #555;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 10px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;
