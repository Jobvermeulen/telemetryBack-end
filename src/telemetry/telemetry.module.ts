import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TelemetryRepository} from "./telemetry.repository";
import {TelemetryService} from "./telemetry.service";
import {TelemetryController} from "./telemetry.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature([TelemetryRepository])
    ],
    providers: [TelemetryService],
    controllers: [TelemetryController],
    exports: [TelemetryService]
})
export class TelemetryModule {}
