import { VariantType } from '@/engine/interfaces/types';

type VariantProps = {
  index: number | null;
  variant: any;
};

function verifyExistVariant(
  currentVariants: VariantType[] = [],
  variantsToEvaluate: VariantType[] = []
) {
  const output: VariantProps = {
    index: null,
    variant: null,
  };

  currentVariants.forEach((current, index) => {
    variantsToEvaluate.forEach((evaluate) => {
      if (currentVariants[index].name === evaluate.name) {
        output.index = index;
        output.variant = current;
      }
    });
  });
  return output;
}

export default verifyExistVariant;
