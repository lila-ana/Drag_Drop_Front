export interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onOk?: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}
