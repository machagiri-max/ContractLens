import chromadb
from chromadb.utils.embedding_functions import DefaultEmbeddingFunction

client = chromadb.PersistentClient(path="chroma_db")

embedding_function = DefaultEmbeddingFunction()

collection = client.get_or_create_collection(
    name="contracts",
    embedding_function=embedding_function,
)


def store_contract(contract_id: int, text: str):

    collection.add(
        ids=[str(contract_id)],
        documents=[text],
    )


def search_contract(question: str):

    result = collection.query(
        query_texts=[question],
        n_results=1,
    )

    return result["documents"][0][0]