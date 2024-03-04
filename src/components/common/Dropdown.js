import React, { useState } from "react";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
  Box,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

const Dropdown = ({ subtypes }) => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [selectedSubtype, setSelectedSubtype] = useState(null);

  const handleClose = () => setShowActionsheet(false);

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
    setShowActionsheet(false);
  };

  return (
    <Box>
      <Button
        onPress={() => setShowActionsheet(true)}
        variant="outline"
        borderColor="#6358aa"
      >
        <ButtonText color="#6358aa">
          {selectedSubtype || "Select Subtype"}
        </ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$60" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {subtypes.map((subtype, index) => (
            <ActionsheetItem
              key={index}
              onPress={() => handleSubtypeSelect(subtype)}
            >
              <ActionsheetItemText>{subtype}</ActionsheetItemText>
            </ActionsheetItem>
          ))}
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default Dropdown;
