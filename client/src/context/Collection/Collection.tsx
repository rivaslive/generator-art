import { createContext } from 'react';
import type { CollectionContext } from './types';

const initialValue: CollectionContext = {
  canCreateCollection: true,
  isReadyForBuild: false,
  loading: true,
  collections: [],
};

const CollectionContext = createContext<CollectionContext>(initialValue);
