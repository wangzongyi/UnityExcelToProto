using Proto;

public class WordConfigManager : BaseConfigManager<WordConfigManager, uint, WordConfig>
{
    public override void Deserialize(byte[] bytes)
    {
        MapField = WordConfigMap.Parser.ParseFrom(bytes).Items;
    }
}