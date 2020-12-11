import {GiveAwayArtifacts} from "@/assets/contracts/GiveAway";

export class GiveAwayContractWrapper{
    constructor(web3, senderAddress, contractAddress) {
        this.giveaway =  new web3.eth.Contract(GiveAwayArtifacts.abi, contractAddress);
        this.senderAddress = senderAddress;
    }

    async amIParticipating(){
        return await this.giveaway.methods.amIParticipating().call({
            from: this.senderAddress,
        });
    }

    participate(participantId, onTransactionHash, onReceipt, onError){
        this.giveaway.methods.participate(participantId).send({
            from: this.senderAddress,
        })
            .on('transactionHash', onTransactionHash)
            .on('receipt', onReceipt)
            .on('error', onError);
    }

}