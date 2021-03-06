import { EventHubCommunicationService } from './services/eventhub-comm.service';
import { ServiceBusCommunicationService } from './services/servicebus-comm.service';
import { SessionService } from './services/session.service';
import { RemotingCommunicationService } from './services/remoting-comm.service';
import { SocketCommunicationService } from './services/socket-comm.service';
import { WcfCommunicationService } from './services/wcf-comm.service';
import { DotNettySimpleService } from './services/dotnetty-simple.service';
import { ResultService } from './services/result.service';
import { NgModule } from '@angular/core';
import { GrpcService } from 'app/shared/services/grpc.service';

@NgModule({
    providers: [
        ResultService,
        WcfCommunicationService,
        SocketCommunicationService,
        RemotingCommunicationService,
        ServiceBusCommunicationService,
        EventHubCommunicationService,
        DotNettySimpleService,   
        GrpcService,     
        SessionService
    ]
})
export class SharedServicesModule {
}