// import
import { ScrollView, StyleSheet } from 'react-native';
import HeaderSection from './HeaderSection';
import OverviewSection from './OverviewSection';
import TransactionHistorySection from './TransactionHistorySection';
import WalletSection from './WalletsSection';

export default function Dashboard() {
    return (
        <ScrollView style = {styles.container}>
            <HeaderSection></HeaderSection>
            <OverviewSection></OverviewSection>
            <TransactionHistorySection></TransactionHistorySection>
            <WalletSection></WalletSection>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {        
        flex: 1,
        backgroundColor: '#C1FFFE',
        padding: 24,
    }
})