import { Ai } from "../../store/appState.ts";
import { AiGateway } from "../../hexagon/ports/ai-gateway.ts";

export class FakeAiGateway implements AiGateway {
  latestAddedAi: Ai | null = null;

  async add(ai: Ai): Promise<void> {
    this.latestAddedAi = ai;
  }
}
